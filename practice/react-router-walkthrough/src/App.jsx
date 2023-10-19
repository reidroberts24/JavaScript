import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About/>}/>
      </Routes>
    </div>  
    </BrowserRouter>
  )
}

export default App
