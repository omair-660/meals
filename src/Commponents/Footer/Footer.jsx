import React from 'react'

export default function Footer() {
  return (
    <>
   <footer className="bg-gray-950 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 All rights reserved.</p>
        <div className="mt-4 *:transition *:duration-500">
          <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}
