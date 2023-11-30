/* eslint-disable react/prop-types */
import { useState } from "react";

export function Dropdown({tittle, dropdownItems}){
    const [open, setOpen] = useState(false)

    const openMenu = () => setOpen(!open)
      
    return(
        <div className="flex justify-center font-medium text-3xl text-black items-center">
            <button className="whitespace-nowrap" onClick={openMenu}>
                {tittle}
            </button>
            {open &&(
            <ul className=" absolute mt-52">
               {dropdownItems.map((element, index) =>(
              <li key={index}  > <button>{element} </button> </li>
              )
                  
            )
               }
            </ul>
            )}
        </div>
    )
}