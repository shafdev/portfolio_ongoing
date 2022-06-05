import React from "react";
import Intro from "./firstpage_components/Intro";
import Socials from "./firstpage_components/Socials";

function FirstPage(){

    return(<>
    {/* <section> */}
        <div className="firstpage">
            <Intro/>
            <Socials/>
        </div>
        
    {/* </section> */}
    </>)

}


export default FirstPage;