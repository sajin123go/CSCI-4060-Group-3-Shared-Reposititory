
const AddSship = ({ newSship, SetNewSship, newSshipDesc, SetNewSshipDesc, handleSumbit }) => {
    return (
        <main className="NewSship">
            <h2>New Scholarship</h2>
            <form className="newSshipForm" onSubmit={handleSumbit}>
                <label htmlFor='SshipTitle'>Title:</label>
                <input id='SshipTitle' type="text" required  value={newSship} onChange={(e) => SetNewSship(e.target.value)}/>
                <label htmlFor='SshipDesc'>Scholarship Description:</label>
                <textarea id='description' type="text" required  value={newSshipDesc} onChange={(e) => SetNewSshipDesc(e.target.value)}/>
                <button type="submit">Sumbit</button>
            </form>
        </main>
    )
}

export default AddSship