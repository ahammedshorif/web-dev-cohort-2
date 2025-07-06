"use client"
function Button(){
     function handelClick(){
        console.log('hi there')
    }
   return(
      <button onClick={handelClick} className="mt-5 font-bold bg-black text-white px-10 rounded-lg">Sign in</button>
   )
}

export default Button;