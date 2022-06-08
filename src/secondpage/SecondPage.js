import React from "react";
import portfolios from "../data/portfolios";


function SecondPage(){
    console.log(portfolios[0].href)
    return(
        <>
            <div className="secondpage">
            <div className="secondpage-flexbox">
            <div className='second-contain'>
            
            {portfolios.map((items)=>{
                return(
                    <>
                    <div className="portfolio-items">
                        
                        <a href={items.href}>
                            <img className="porfolio-img" src={items.src}/>
                        </a>
                        <p>{items.title}</p>
                    </div>
                   
                    </>
            )
            })}

            </div>
            </div>
            </div>
        </>
    )

}

export default SecondPage;