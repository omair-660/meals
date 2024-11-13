import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function Aria() {
  const [aria, setaria] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const countryISOMap = {
    American: "us",
    British: "gb",
    Canadian: "ca",
    Chinese: "cn",
    Croatian: "hr",
    Dutch: "nl",
    Egyptian: "eg",
    Filipino: "ph",
    French: "fr",
    Greek: "gr",
    Indian: "in",
    Irish: "ie",
    Italian: "it",
    Jamaican: "jm",
    Japanese: "jp",
    Kenyan: "ke",
    Malaysian: "my",
    Mexican: "mx",
    Moroccan: "ma",
    Polish: "pl",
    Portuguese: "pt",
    Russian: "ru",
    Spanish: "es",
    Thai: "th",
    Tunisian: "tn",
    Turkish: "tr",
    Ukrainian: "ua",
    Vietnamese: "vn"
  };

  function getAria() {
    setisLoading(true);
    axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((res) => {
        console.log(res.data.meals);
        setaria(res.data.meals);
        setisLoading(false);
      });
  }

  useEffect(() => {
    getAria();
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : 
        <section className="flex flex-wrap">
          {aria.map((area, index) => (
            <div key={index} className='w-full md:w-1/2 lg:w-1/3'>
              <div className="shadow text-center p-4 m-3">
                <Link to={`/FillterAria/${area.strArea}`}>
                  <img
                  loading="lazy"
                    src={`https://flagcdn.com/w40/${countryISOMap[area.strArea]}.png`}
                    alt={`${area.strArea} flag`}
                    className="mx-auto mb-2"
                  />
                  <h2 className='text-[#f2ccc0] font-bold'>{area.strArea}</h2>
                </Link>
              </div>
            </div>
          ))}
        </section>
      }
    </>
  );
}
