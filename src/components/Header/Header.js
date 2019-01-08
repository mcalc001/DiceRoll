import React from 'react';
import dice from './dice.gif'
import './Header.css';



const Header = () => {
return(
    <div >

    
    <img className=" mw5 black center flex flex-column pa4 "src={dice} alt="loading..." />
    <h2 className=" f2 tc pb "> Let the dice decide</h2>
    <h3 className=" f4 tc pb pb3"> Fill in as many boxes and you like then hit roll </h3>
   </div>
    );
}

export default Header; 