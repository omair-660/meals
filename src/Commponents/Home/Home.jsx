import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'

export default function Home() {
    const [meals, setmeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    function getMeals() {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then((res) => {
            setmeals(res.data.meals)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getMeals()
    }, [])


    return (
    <>
<section className="flex flex-wrap ">
    {isLoading ? (
       <Loading/>
    ) : (
        meals.map((meal) => (
            <div key={meal.idMeal} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                   <div className="shadow-lg hover:shadow-xl transition duration-300 p-4 rounded-lg bg-[#37312a]  relative overflow-hidden group/item">
                <Link to={`/mealsDetails/${meal.idMeal}`}>
                  <div className="image overflow-hidden border border-[#815622] p-2 rounded">
                    <img
                    loading="lazy"
                      src={meal.strMealThumb}
                      className="mx-auto w-full rounded-lg transform transition duration-500 group-hover/item:rotate-6 group-hover/item:scale-110 "
                      alt={meal.strMeal}
                    />
                  </div>
                  <div className="text-center rounded flex justify-center items-center flex-col absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full group-hover/item:top-1/2 group-hover/item:-translate-y-1/2 group-hover/item:opacity-90 opacity-0 transition-all duration-500 bg-slate-900 bg-opacity-75 text-white w-full h-full p-4">
                    <h2 className="text-xl font-bold mb-4">{meal.strMeal}</h2>
                  </div>
                </Link>
              </div>
            </div>
        ))
    )}
</section>


</>
    )
}
