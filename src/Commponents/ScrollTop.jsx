import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 

export default function ScrollTop() {
  const { pathname } = useLocation(); 
const [isScroll, setisScroll] = useState(false)
  useEffect(() => {
  
    window.scrollTo({ top: 0, behavior: 'smooth' }); 

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);

  }, [pathname]); 

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      className={`"scroll-top-btn fixed bottom-5 right-5 py-2 px-5 bg-[#ffc107] border-none rounded cursor-pointer transition duration-500 ${isScroll ? 'opacity-100' : 'opacity-0' }`}
    >
     <i className="fa-solid fa-caret-up text-black text-2xl"></i>
    </button>
  );
}

