import { useState } from "react";

export function LoginInputs(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(email, password)
    return(
        <div className="w-4/5">
            <fieldset>
                <legend>
                    <label htmlFor="useremail">Email: </label>
                </legend>
                <input className="w-full mb-3 p-2 border bg-gray-800 border-white rounded" type="email" id="useremail" name="useremail" onChange={(e) => setEmail(e.target.value)}/>
            </fieldset>
            <fieldset>
                <legend>
                    <label htmlFor="userpassword" >Password: </label>
                </legend>
                <input className= "w-full p-2 border  bg-gray-800 border-white rounded" type="password" id="userpassword" name="userpassword" onChange={(e)=> setPassword(e.target.value)}/>
            </fieldset>
        </div>
    )

}