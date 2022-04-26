import './Sship.css'
import {AiOutlineSearch} from 'react-icons/ai'
import sList from './sList' 
import background from '../../asset/school.jpg'

const Sship = ({ scholarships, handleDelete, Ssearch, setSsearch }) => {
    return (
        
       <main>
            <div className='Sbar' style={` background: background') no-repeat center center/cover `}>
                <div className='content'>
                    <h1>Scholarship</h1>
                    <p className='Stext'>Search</p>
                    <form className='search' onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input type='text' role='searchbox' placeholder='Enter Scholarship Name..' value={Ssearch} onChange={(e) => setSsearch(e.target.value)} />
                        </div>
                        <div className='button'>
                            <button type='submit'><AiOutlineSearch className='icon'/></button>
                            
                        </div>
                    </form>
                </div>
            </div>
           {scholarships.length ? (
               <sList    
               scholarships={scholarships}
               handleDelete={handleDelete}/>
           ) : (
           <p> There are currently no Scholarship.</p>)}
        </main>
    )
}

export default Sship
