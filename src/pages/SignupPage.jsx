import LogoSVG  from '../../public/assets/logo-no-background.svg';
import { LoginInputs } from '../components/LoginInputs';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function SignupPage(){
    const [name, setName] = useState('')
console.log(name)

    return(
        <div className="h-auto w-full bg-cover bg-center" style={{backgroundImage: "url('/assets/parque.jpg')"}} >
        <div className="bg-gray-800 opacity-95 text-white w-2/5 p-4 h-screen flex flex-col items-center">
            <img src={LogoSVG} alt="logo" className="w-32"/>
            <h1 className="text-3xl mt-2 mb-2">Welcome to ScriptPark!!</h1>
            <p className="mb-2">Create an Account</p>
            <fieldset className='w-4/5'>
            <legend><label htmlFor="name">Name:</label></legend>
            <input className= "w-full p-2 border mb-3  bg-gray-800 border-white rounded" type="password" id="userpassword" name="userpassword" onChange={(e)=> setName(e.target.value)}/>
            </fieldset>
            <LoginInputs/>
            <button className="w-2/5 bg-cyan-700 h-12 mt-5 mb-5 rounded-full">Login</button>

            <p>Already have an account? <span className='t text-center'><Link to='/'> Log In </Link> </span></p>
 
        </div>

    </div>
    )
}