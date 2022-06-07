import React, { useContext } from "react";


function Socials(props){
    console.log(!props.context) /*means false*/

    // const [issocialactive,setSocialActive] = useContext(false)

    return(<>
    <div className={true? "social-container":"social-container social-active"}>
    
    <div className={!props.context?"socials ":"socials social-active"}>
       <a href="https://github.com/shafdev/">
        <img src='logos/github.svg'/>
        </a> 
        <a href="mailto: shafik8011@gmail.com">
            <img className="gmail-img" src='logos/gmail-logo.svg'/>

        </a>
        <a href="https://www.instagram.com/shaf_ikk/">
            <img src='logos/insta.svg'/>
        </a>
        
        <a href="https://wa.me/7278892896">
            <img  className="wa-img" src='logos/whatsapp.svg'/>
        </a>
        

    </div>
    </div>
    </>)
}

export default Socials;