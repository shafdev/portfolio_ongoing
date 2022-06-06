import React, { useContext } from "react";


function Socials(props){
    console.log(!props.context) /*means false*/

    // const [issocialactive,setSocialActive] = useContext(false)

    return(<>
    <div className={true? "social-container":"social-container social-active"}>
    
    <div className={!props.context?"socials ":"socials social-active"}>
        
        <img src='logos/github.svg'/>
        <img className="gmail-img" src='logos/gmail-logo.svg'/>
        <img src='logos/insta.svg'/>
        <img src='logos/twitter.svg'/>

    </div>
    </div>
    </>)
}

export default Socials;