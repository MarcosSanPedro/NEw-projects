import { LoginInputs } from "../components/LoginInputs";
import { Link } from "react-router-dom";

export function LoginPage(){
  

    return(
        <div className="h-screen w-full bg-cover bg-center" style={{backgroundImage: "url('/assets/parque.jpg')"}} >
            <div className="bg-gray-800 opacity-95 text-white w-2/5 p-4 h-screen flex flex-col items-center">
                <img src="logo-no-background.svg" alt="logo"  className="w-32"/>
                <h1 className="te text-3xl mt-5 mb-4">Welcome Back!!</h1>
                <p className="mb-5">Log into your account</p>
                <LoginInputs/>
               

                <p>Don't have an account <Link to='/SignupPage'> Sign Up </Link></p>

            </div>

        </div>
    )
}