import { useEffect } from "react"
import { useParams } from "react-router-dom"

const EditSship = ({ scholarships, handleEdit, newSshipDesc, setNewSshipDesc, newSship, setNewSship }) => {
    const { id } = useParams()
    const scholarship = scholarships.find(scholarship => (scholarship.id).toString() === id)

    useEffect(() => {
        if (scholarship) {
            setNewSship(scholarship.title)
            setNewSshipDesc(scholarship.description)
        }
    }, [scholarship, setNewSship, setNewSshipDesc])

    return (
        <main className="NewSship">
        <h2>New Scholarship</h2>
        <form className="newSshipForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='SshipTitle'>Title:</label>
            <input id='SshipTitle' type="text" required  value={newSship} onChange={(e) => setNewSship(e.target.value)}/>
            <label htmlFor='SshipDesc'>Scholarship Describtion:</label>
            <textarea id='describtion' type="text" required  value={newSshipDesc} onChange={(e) => setNewSshipDesc(e.target.value)}/>
            <button type="submit" onClick={()=>handleEdit(scholarship.id)}>Sumbit</button>
        </form>
    </main>
    )
}

export default EditSship