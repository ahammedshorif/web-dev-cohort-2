export default function Signin(){
    return <div className="h-screen flex justify-center items-center">

        <div className="w-[300px] h-[350px] bg-white text-black rounded-lg ">
            <div className="place-items-center mt-5 mb-12">
                <h1 className="text-2xl font-bold">Create an account</h1>
               <p>Don`t have an account? <a href="">Signin</a></p>
            </div>
            <div className="place-items-center">
                <div className="my-5">
                     <h3>Username</h3>
                    <input type="text" placeholder="xyz@gmail.com" className="bg-amber-50 rounded border-2 px-2" />
                </div>
                <div>
                    <h3>Password</h3>
                    <input type="text" placeholder="348923" className="bg-amber-50 rounded border-2 px-2" />
                </div>

                <button className="mt-5 font-bold bg-black text-white px-10 rounded-lg">Sign in</button>
            </div>
        </div>
    
    </div>
}