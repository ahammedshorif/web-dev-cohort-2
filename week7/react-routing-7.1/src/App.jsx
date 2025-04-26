
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Landing from "./components/Landing"

function App() {
  return (
    <div>
      <p>This is not Right way , its page reload</p>
      <div style={{display: "flex"}}>
          <button onClick={()=>{
            window.location.href= "/"
          }}>Landing</button>

          <button onClick={()=>{
            window.location.href= "/home"
          }}>Home</button>

          <button onClick={()=>{
            window.location.href= "/about"
          }}>About</button>

      </div>
      <BrowserRouter>
           <Topbar></Topbar>
          <Routes>
             <Route path='/' element={<Landing></Landing>} />
             <Route path='/home' element={<Home></Home>} />
             <Route path='/about' element={<About></About>} />
          </Routes>
      </BrowserRouter>
    </div>
    
  )
}

function Topbar(){
  const navigate= useNavigate()
  return <div>
      <p>this is the rigth way</p>
        <button onClick={()=>{
            navigate("/")
          }}>Landing</button>

          <button onClick={()=>{
            navigate("/home")
          }}>Home</button>

          <button onClick={()=>{
            navigate("/about")
          }}>About</button>
  </div>
}

export default App
