import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export default function Ingredients() {
  const [ingredients, setingredients] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  function getIngredients() {
    setisLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      .then((res) => {
        setisLoading(false);
        setingredients(res.data.meals);
      });
  }

  useEffect(() => {
    getIngredients();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="flex flex-wrap">
          {ingredients.map((ingredient) => (
           <div className="w-full md:w-1/2 lg:w-1/3 " key={ingredient.idIngredient}>
           <div className="shadow text-center p-4 m-3 bg-[#37312a] text-white rounded-lg">
           <Link to={`/fillterIngredient/${ingredient.strIngredient}`}>
           <img
           loading="lazy"
               src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`}
               alt={ingredient.strIngredient}
               className="w-[100px] mx-auto mb-3"
             />
             <h2 className="text-lg font-semibold">{ingredient.strIngredient}</h2>
             <p>{ingredient.strDescription?.split(' ').slice(0,16).join(' ')}</p>
           </Link>
           </div>
         </div>
         
          ))}
        </section>
      )}
    </>
  );
}
