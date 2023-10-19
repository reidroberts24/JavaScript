import { React, useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Routes, Route, useParams } from 'react-router-dom'

const Location = (props) => {
  const { city } = useParams();
  return(
    <h1>Welcome to { city }!</h1>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <p>
      <Link to='/location/Seattle'>Seattle</Link>
      |
      <Link to='/location/Chicago'>Chicago</Link>
      |
      <Link to='/location/Burbank'>Burbank</Link>
    </p>
    <Routes>
      <Route path="/location/:city" element={ <Location/> }/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
