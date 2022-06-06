import React, { useState } from "react";
import Intro from "./firstpage_components/Intro";
import Socials from "./firstpage_components/Socials";
import Navbar from "../nav/Navbar";
import Burger from "../nav/Burger";
import { useContext } from "react";
import { contextBurger } from "../nav/Burger";


function FirstPage(){
    // const [test,setTest] = useState('test')
    const contextResult = useContext(contextBurger)
    console.log(`this is result ${contextResult}`)
    return(<>

        <div className="firstpage">

            <Navbar context={contextResult}/>
            <Burger />
            <Intro/>
            <Socials context ={contextResult}/>
            
        </div>  
        

    </>)

}


export default FirstPage;