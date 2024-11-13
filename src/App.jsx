import React from 'react'

import './index.css'
import LayOut from './Commponents/LayOut/LayOut'
import Home from './Commponents/Home/Home'
import MealsDetails from './Commponents/MealsDetails/MealsDetails'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Categories from './Commponents/Categories/Categories'
import FillterCtegory from './Commponents/FillterCtegory/FillterCtegory'
import Aria from './Commponents/Aria/Aria'
import Ingredients from './Commponents/Ingredients/Ingredients'
import FillterAria from './Commponents/FillterAria/FillterAria'
import FillterIngredient from './Commponents/FillterIngredient/FillterIngredient'
import Search from './Commponents/Search/Search'

function App() {
  
  let x = createBrowserRouter([
    {path: '', element: <LayOut/>,children:[
      {path: 'home', element: <Home/>},
      {path: '', element: <Home/>},
      { path: 'mealsDetails/:id', element: <MealsDetails /> },
      { path: 'fillterCtegory/:category', element: <FillterCtegory /> },
      { path: 'fillterAria/:aria', element: <FillterAria /> },
      { path: 'fillterIngredient/:ingredient', element: <FillterIngredient /> },
      { path: 'categories', element: <Categories /> },
      { path: 'search', element: <Search /> },
      { path: 'aria', element: <Aria /> },
      { path: 'ingredients', element: <Ingredients /> },
    ]}
  ])

  return (
  <>
  <RouterProvider router={x}></RouterProvider>
  </>
  )
}

export default App
