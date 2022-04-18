import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Sbar.css'
import school from '../../asset/school.jpg'

const Sbar = () => {
    return (
        <div className='Sbar'>
            <div className='content'>
                <h1>Scholarship</h1>
                <p className='Stext'>Search</p>
                <form className='search'>
                    <div>
                        <input type='text' placeholder='Enter Scholarship Name..' />
                    </div>
                    <div className='button'>
                        <button type='submit'><AiOutlineSearch className='icon'/></button>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Sbar