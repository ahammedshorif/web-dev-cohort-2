
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import About from "./components/About"

function App() {

  return (
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<div>This is / page</div>} />
             <Route path='/home' element={<Home></Home>} />
             <Route path='/about' element={<About></About>} />
          </Routes>
      </BrowserRouter>
    
  )
}

export default App
