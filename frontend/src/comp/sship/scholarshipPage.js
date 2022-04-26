import { useParams, Link } from 'react-router-dom'

const scholarshipPage = (scholarships, handleDelete) => {
    const {id} = useParams
    const scholarship = scholarships.find(scholarships=>(scholarships.id).toString() === id)

    return (
        <main className="scholarshipPage">
            <article className="scholarship">
                <>
                    <h2>{scholarship.title}</h2>
                    <p className="Description">{scholarship.description}</p>
                    <Link to={`/EditSship/${scholarship.id}`}><button className="editBtn">Edit</button></Link>
                    <button className="DeleteBtn" onClick={()=> handleDelete(scholarship.id)}>Delete</button>
                </>
            </article>
        </main>
    )
}

export default scholarshipPage 