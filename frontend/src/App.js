import { useState, useEffect } from 'react'
import api from './api/scholarships'
import Navbar from './comp/navbar/Navbar'
import AddSship from './comp/sship/AddSship'
import scholarshipPage from './comp/sship/scholarshipPage'
import Sship from './comp/sship/Sship'
import { Route, Routes, useNavigate } from 'react-router-dom'
import EditSship from './comp/sship/EditSship'


function App() {
  const [scholarships , setScholarships] = useState([])
  const [newSship, SetNewSship] = useState('')
  const [newSshipDesc, SetNewSshipDesc] = useState('') 
  const [newEditSship, SetNewEditSship] = useState('')
  const [newEditSshipDesc, SetNewEditSshipDesc] = useState('') 
  const [Ssearch, setSsearch] = useState('')
  const history = useNavigate()

  useEffect(() => {
    const filterSearch = scholarships.filter((scholarships) =>
    ((scholarships.description).toLowerCase()).includes(Ssearch.toLowerCase())
    || ((scholarships.title).toLowerCase()).includes(Ssearch.toLowerCase()))

    setSsearch(filterSearch.reverse())

  }, [scholarships,Ssearch])
  
  useEffect(() => {
    const fetchSship = async () => {
      try {
        const resp = await api.get('/scholarships')
        console.log(`Error:`)
        setScholarships(resp.data)
      } catch (err) {
          console.log(`Error: ${err.message}`)
      }
    }

    fetchSship()
  }, [])

  const handleSumbit = async (e) => {
    e.preventDefault()
    const id = scholarships.length ? scholarships[scholarships.length - 1].id+1 : 1
    const NewSship = { id, title: newSship, description: newSshipDesc }
    try{
      const resp =  await api.post(`/scholarships/`, NewSship)
      const AllSship = [ ...scholarships, resp.data]
      setScholarships(AllSship)
      SetNewSship('')
      SetNewSshipDesc('')
      history.push('/')
    }catch (err) {
        console.log(`Error: ${err.message}`)
    }
  }

  const handleDelete = async (id) => {
    try{
      await api.delete(`/scholarships/${id}`)
      const listScholarships = scholarships.filter((scholarships) => scholarships.id !== id)
      setScholarships(listScholarships);
      history.push('/')
    }catch (err) {
      console.log(`Error: ${err.message}`)
  }
}

const handleEdit = async (id) => {
  const editedSship = { id, title: newEditSship, description: newEditSshipDesc }
  try{
    const resp =  await api.put(`/scholarships/${id}`, editedSship)
    setScholarships(scholarships.map(scholarships => scholarships.id === id ? { ...resp.data } : scholarships))
    SetNewEditSship('')
    SetNewEditSshipDesc('')
    history.push('/')
  }catch (err) {
    console.log(`Error: ${err.message}`)
}
}

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Sship Ssearch={Ssearch} SetSsearch={setSsearch} handleDelete={handleDelete} scholarships={scholarships}/>}/>
        <Route path='/AddSship' element={<AddSship newSship={newSship} SetNewSship={SetNewSship} newSshipdesc={newSshipDesc} SetNewSshipdesc={SetNewSshipDesc} handleSumbit={handleSumbit}/>}/>
        <Route path='/EditSship/:id' element={<EditSship scholarships={scholarships} newSship={newSship} SetNewSship={SetNewSship} handleEdit={handleEdit} newSshipdesc={newSshipDesc} SetNewSshipdesc={SetNewSshipDesc} />}/>
        <Route path='/scholarshipPage/:id' element={<scholarshipPage scholarships={scholarships} handleDelete={handleDelete}/>} />
      </Routes>
    </>

  );
}

export default App
