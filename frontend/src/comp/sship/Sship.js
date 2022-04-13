import React, {useState} from 'react'
import './Sship.css'
import {BiHide} from 'react-icons/bi'
import {BiShow} from 'react-icons/bi'
import scholarshipDefault from '../../asset/scholarshipDefault.PNG'

function Sship({name, description}) {

    const[click, clicked] = useState(false)
    const clickHandle = () => clicked(!click)

    return (
        <div className='sship'>
            <div className='show' onClick={clickHandle}>
                    {click ? (<BiShow />) : (<BiHide />) }
            </div>

            <h3>{name}</h3>

            <div className='sinfo'>
                
                <p>{description} </p>
                <div className={click ? 'simage active' : 'simage'} >
                    <img src={scholarshipDefault} alt='Default Scholarship' />
                </div>
                
            </div>
            
            <button className='btn'>Donate</button>

            
        </div>
    )
}

export default Sship