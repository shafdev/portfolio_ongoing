import React, { useState } from "react";
import { createContext } from "react";

const contextBurger = createContext()

function Burger({ children }){

    const [isActive,setIsActive] = useState(false) /*default false*/

    const buttonclick =()=>{
        setIsActive(!isActive)
        console.log(isActive)
        
    }

    // console.log(props)

    return(
        <>
            <contextBurger.Provider value={isActive}>{children}</contextBurger.Provider>
                <div onClick={buttonclick} className="burger">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    
                </div>

        </>
    )
}

export default Burger;

export {contextBurger};