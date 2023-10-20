import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import axios from 'axios';
import Form from './components/Form'
import Planets from './components/Planets';
import './App.css'

function App() {
  const [starWarsList,setStarWarsList] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/')
      .then(response => {setStarWarsList(response.data.results)})
  }, [])

  return (
    <div >
      <Form/>
      <BrowserRouter>
        <Routes>
          <Route path='/planets/:id' element={ <Planets/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
