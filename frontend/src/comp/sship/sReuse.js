import { BiTrash } from 'react-icons/bi'
import scholarshipDefault from '../../asset/scholarshipDefault.PNG'
import { Link } from 'react-router-dom'

const sReuse = ({ scholarships, handleDelete }) => {
    return (
    <li className="scholarship" >
        <Link to={`/scholarshipPage/$(scholarships.id)`}>
        <label>{scholarships.scholarshipName}</label>
        </Link>
        <p>{(scholarships.description).length <= 100 ? 
        scholarships.description : 
        `${(scholarships.description).slice(0,100)}...`}</p>
        <img  src={scholarshipDefault} alt="Default scholarship photo" />
        <BiTrash  role="button" tabIndex="0" onDoubleClick={() => handleDelete(scholarships.id)}/>
    </li>
    )
}

export default sReuse