import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaRegTimesCircle} from 'react-icons/fa'
import './Navbar.css'
import NafaLogo from '../../asset/NafaLogo.PNG'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const[click, clicked] = useState(false)
    const clickHandle = () => clicked(!click)

    return (
        <div className='Navbar'>
            <div className='container'>
                
                <h1><img scr={NafaLogo} alt=''/><span>NAFA</span></h1>
                
                <ul className={click ? 'NavMenu active' : 'NavMenu'}>
                    <li><link to="/">About</link></li>
                    <li><link to="/">Scholarship</link></li>
                    <li><link to="/">Membership</link></li>
                    <li><link to="/">Sign up</link></li> 
                </ul>
                <div className='hamborger' onClick={clickHandle}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<GiHamburgerMenu className= 'icon' />) }
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar