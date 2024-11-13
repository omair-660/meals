import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function MealsDetails() {
  let { id } = useParams();
  const [meal, setmeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        console.log(res.data.meals);

        setmeal(res.data.meals[0]);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
    <div className="container mx-auto p-4">
  {isLoading ? (
    <Loading />
  ) : meal ? (
    <section className="flex flex-wrap">
      <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
        <div className="ps-4">
          <img
          loading="lazy"
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-96 rounded-lg mb-4 mx-auto shadow-xl transition-transform duration-500 hover:scale-[1.02]"
          />
          <h2 className="text-2xl font-bold text-[#FF5722]">{meal.strMeal}</h2>
        </div>
      </div>
      <div className="w-full md:w-8/12">
        <div className="ps-4">
          <h1 className="text-3xl font-bold text-[#FF5722] mb-4">Instructions</h1>
          <p className="whitespace-pre-wrap leading-7 text-gray-50">{meal.strInstructions}</p>

          <div className="my-6">
            <p className="text-xl text-gray-100 mb-2">
              <strong className="text-[#FF5722]">Category:</strong> {meal.strCategory}
            </p>
            <p className="text-xl text-gray-100 mb-4">
              <strong className="text-[#FF5722]">Area:</strong> {meal.strArea}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ec7d5b] mb-4">Ingredients</h2>
            <ul className="flex flex-wrap list-none gap-6">
              {meal.strIngredient1 && (
                <li className="bg-[bisque] text-teal-900 rounded p-3 shadow-md">
                  {meal.strIngredient1}: {meal.strMeasure1}
                </li>
              )}
              {meal.strIngredient2 && (
                <li className="bg-[bisque] text-teal-900 rounded p-3 shadow-md">
                  {meal.strIngredient2}: {meal.strMeasure2}
                </li>
              )}
              {meal.strIngredient3 && (
                <li className="bg-[bisque] text-teal-900 rounded p-3 shadow-md">
                  {meal.strIngredient3}: {meal.strMeasure3}
                </li>
              )}
              {meal.strIngredient4 && (
                <li className="bg-[bisque] text-teal-900 rounded p-3 shadow-md">
                  {meal.strIngredient4}: {meal.strMeasure4}
                </li>
              )}
              {meal.strIngredient5 && (
                <li className="bg-[bisque] text-teal-900 rounded p-3 shadow-md">
                  {meal.strIngredient5}: {meal.strMeasure5}
                </li>
              )}
              {meal.strIngredient6 && (
                <li className="bg-[bisque] text-teal-900 rounded p-3 shadow-md">
                  {meal.strIngredient6}: {meal.strMeasure6}
                </li>
              )}
              {meal.strIngredient7 && (
                <li className="bg-[bisque] text-teal-900 rounded p-3 shadow-md">
                  {meal.strIngredient7}: {meal.strMeasure7}
                </li>
              )}
            </ul>
          </div>

          <div className="">
            <span className="font-bold text-[#ec7d5b]">Tags:</span>
            <br />
            <br />
            <p>
              {meal.strTags?.split(",").map((tag, index) => (
                <span key={index} className="tag me-3 bg-[lightgoldenrodyellow] text-gray-800 py-1 px-3 rounded shadow-sm">
                  {tag}
                </span>
              ))}
            </p>
            <br />
            <button className="hover:scale-105 bg-gradient-to-r from-[#795548] to-[#b7491d] text-white transition duration-500 rounded p-3 mt-4 shadow-lg">
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Watch Recipe Video
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <p className="text-center text-xl text-red-500">No meal found.</p>
  )}
</div>

    </>
  );
}
