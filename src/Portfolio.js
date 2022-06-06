import React from 'react'
import FirstPage from './firstpage/body/FirstPage';
import Burger from './firstpage/nav/Burger';
import Navbar from './firstpage/nav/Navbar';
import SecondPage from './secondpage/SecondPage'
import ThirdPage from './thirdpage/ThirdPage'


function Portfolio(){


    return(<>
    <div className='container'>
        <div className='portfolio'>
            {/* <Navbar/> */}
            <Burger>
                <FirstPage/>
            </Burger>
        </div>
        <div>
            <SecondPage/>
        </div>
        <div>
            <ThirdPage/>
        </div>
    </div>
    </>)
}

export default Portfolio;