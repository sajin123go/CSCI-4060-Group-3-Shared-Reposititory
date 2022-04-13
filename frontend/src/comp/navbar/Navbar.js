import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaRegTimesCircle} from 'react-icons/fa'
import './Navbar.css'
import NafaLogo from '../../asset/NafaLogo.PNG'


const Navbar = () => {
    const[click, clicked] = useState(false)
    const clickHandle = () => clicked(!click)

    return (
        <div className='Navbar'>
            <div className='container'>
                
                <h1><img scr={NafaLogo} alt=''/><span>NAFA</span></h1>
                
                <ul className={click ? 'NavMenu active' : 'NavMenu'}>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Scholarship</a></li>
                    <li><a href='#'>Membership</a></li>
                    <li><a href='#'>Sign up</a></li> 
                </ul>
                <div className='hamborger' onClick={clickHandle}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<GiHamburgerMenu className= 'icon' />) }
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar