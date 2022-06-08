import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import FirstPage from './firstpage/body/FirstPage';
import Burger from './firstpage/nav/Burger';
import Navbar from './firstpage/nav/Navbar';
import SecondPage from './secondpage/SecondPage'
import ThirdPage from './thirdpage/ThirdPage'


function Portfolio(){


    return(<>
    <Router>
    <Routes>
        <Route path='/' element={


        <div className='container'>
            <div className='portfolio'>
                {/* <Navbar/> */}
                <Burger>
                    <FirstPage/>
                </Burger>
            </div>
            {/* <div> */}
                {/* <SecondPage/> */}
            {/* </div> */}
            {/* <div> */}
                <ThirdPage/>
            {/* </div> */}
        </div>
        }></Route>
    
                
    <Route path='/work' element={<SecondPage/>}></Route>

    </Routes>
    </Router>
    </>)
}

export default Portfolio;