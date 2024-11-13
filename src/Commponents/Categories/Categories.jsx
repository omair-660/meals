import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setisLoading] = useState(false)

  function getCategories() {
    setisLoading(true)
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        setCategories(res.data.categories);
    setisLoading(false)
      });
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
{isLoading ? <Loading/> : 
 <section className="flex flex-wrap">
  {categories.map((category) => (
    <div key={category.idCategory} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mb-4">
  <div className="relative overflow-hidden group/item p-4 shadow-md bg-[#37312a]">
  <Link to={`/fillterCtegory/${category.strCategory}`}>
    <div className="image overflow-hidden">
      <img
        src={category.strCategoryThumb}
        className="mx-auto w-full rounded-lg transform transition duration-500 group-hover/item:-rotate-6 group-hover/item:scale-110"
        alt={category.strCategory}
      />
    </div>
    <div className="text-center rounded flex justify-center items-center flex-col absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full group-hover/item:top-1/2 group-hover/item:-translate-y-1/2 group-hover/item:opacity-100 opacity-0 transition-all duration-500 bg-[#FF5722] bg-opacity-80 text-white w-full h-full p-4">
      <h2 className="text-xl font-bold mb-4">{category.strCategory}</h2>
      <p className="text-sm">
        {category.strCategoryDescription.split(" ").slice(0, 10).join(" ")}
      </p>
    </div>
  </Link>
</div>


    </div>
  ))}
</section>
}
    </>
  );
}
