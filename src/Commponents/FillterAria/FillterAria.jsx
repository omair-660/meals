import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

export default function FillterAria() {
    let {aria} = useParams()
    const [fillterAria, setfillterAria] = useState([])
    const [isLoading, setisLoading] = useState([])
  useEffect(()=>{
    setisLoading(true)
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${aria}`)
    .then((res)=>{
    setisLoading(false)
        setfillterAria(res.data.meals)
    })
  },[aria])
  return (
    <>
    {isLoading ? <Loading/> : 
     <section className="flex flex-wrap">
      {fillterAria.map((meal) => 
            <div key={meal.idMeal} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                <div className="shadow-lg hover:shadow-xl transition duration-300 p-4 rounded-lg bg-[#37312a]  relative overflow-hidden group/item">
                <Link to={`/mealsDetails/${meal.idMeal}`}>
                <div className="image">
            <img
            loading="lazy"
              src={meal.strMealThumb}
              className="mx-auto w-full rounded-lg"
              alt={meal.strMeal}
            />
          </div>
          <div className="text-center rounded flex justify-center items-center flex-col absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full group-hover/item:top-1/2 group-hover/item:-translate-y-1/2 group-hover/item:opacity-90 opacity-0 transition-all duration-500  bg-[#FF5722] bg-opacity-80 text-white w-full h-full p-4">
            <h2 className="text-xl font-bold mb-4">{meal.strMeal}</h2>
          </div>
                    </Link>
                </div>
            </div>
        
    )}
      </section>
      }
    </>
  )
}
