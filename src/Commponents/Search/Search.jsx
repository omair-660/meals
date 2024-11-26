import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Search() {
  const [searchType, setSearchType] = useState('name');
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);  // Added loading state

  function searchMeals() {
    setLoading(true);  // Set loading to true when fetching data
    const url =
      searchType === 'name'
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        : `https://www.themealdb.com/api/json/v1/1/search.php?f=${query.charAt(0)}`;

    axios
      .get(url)
      .then((res) => {
        setMeals(res.data.meals || []);
        setLoading(false);  // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);  // Set loading to false on error
      });
  }

  return (
    <section>
      <div className="container">
        <div className="flex items-center w-1/2">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="border border-gray-300 rounded p-2 mr-2 outline-none"
          >
            <option value="name">Search by Name</option>
            <option value="firstLetter">List by First Letter</option>
          </select>

          <input
            type="search"
            placeholder={searchType === 'name' ? 'Search by meal name' : 'Enter a letter'}
            value={query}
            required
            onChange={(e) => setQuery(e.target.value)}
            className="border-none rounded p-2 flex-grow outline-none"
          />

          <button
            onClick={searchMeals}
            className="bg-yellow-400 text-white px-4 py-2 ml-2 rounded"
          >
            Search
          </button>
        </div>

        {loading ? (
          <div className="mt-4 text-gray-200">Loading...</div>  // Show loading text
        ) : meals.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meals.map((meal) => (
              <div key={meal.idMeal} className="p-4 border border-[#6d501a] rounded shadow text-white">
                <Link to={`/mealsDetails/${meal.idMeal}`}>
                  <h2 className="text-xl font-bold">{meal.strMeal}</h2>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-auto rounded mt-2"
                  />
                  <p className="mt-2">{meal.strInstructions.slice(0, 100)}...</p>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-gray-200">No meals found</p>
        )}
      </div>
    </section>
  );
}
