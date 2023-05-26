import React, { useEffect, useState } from 'react';
import {HiOutlineMenu} from 'react-icons/hi';
import {RxCross2} from 'react-icons/rx';
import ieiLogo from '../images/iei-logo.png';

const Navbar = () => {

    const [toggler, setToggler] = useState(true);
    
    const [navOptionsStyle, setNavOptionsStyle] = useState({});


    useEffect(() =>{
        if (window.screen.width < 801){
        if (toggler){
            setNavOptionsStyle({
                right : '-100vw'
            });
           
        }
        else{
            setNavOptionsStyle({
                right : '1vh'
            });
        }
    }
    },[toggler, navOptionsStyle]);


    
    

    


  return (
    <div className='navbar' >
        <div className="navbarLogo">
          <img src={ieiLogo} alt=""/>
          <div className='navbarLogoText'>
            <h1>IEI</h1>
            <p >Kadapa</p>
          </div>
        </div>

        <div className="toggle">
            {toggler ? <HiOutlineMenu id='toggleMenu' onClick={() => setToggler(!toggler)} /> : <RxCross2 id='toggleX' onClick={() => setToggler(!toggler)} />} 
            
        </div>

        <div className="navOptions" style={navOptionsStyle}>
          <ul >
            <li ><a href="#Home" >Home</a></li>
            <li ><a href="#AboutUs" >About Us</a></li>
            <li ><a href="#Events" >Events</a></li>
            <li ><a href="#Membership" >Membership</a></li>
            <li ><a href="#ContactUs" >Contact Us</a></li>
          </ul>
        </div>
        
    </div>
  )
}

export default Navbar