import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Nav from "./components/Nav"
import Project from './components/Project'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
      <Nav />
      <Home />
      </div> 
    },
    {
      path:"/about",
      element: <div>
       <Nav />
      <About />
      </div>
    },
    {
      path:"/project",
      element: <div>
       <Nav />
      <Project />
      </div>
    }
  ]
)
function App() {


  return (
    <>
      <div>
        
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
