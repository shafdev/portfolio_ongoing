import React, { useState } from "react";

function Navbar(props){
    const [isActive,setIsActive] = useState(false) /*default false*/

    // const buttonclick =()=>{
    //     setIsActive(!isActive)
        
    // }

    // console.log(props.context)

    return(
        <>
            <nav className="navbar">
                <ul className={props.context ? "ul-list nav-active":"ul-list"}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>

                </ul>

                {/* <div onClick={buttonclick} className="burger">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div> */}

            </nav>

        </>
    )
}

export default Navbar;