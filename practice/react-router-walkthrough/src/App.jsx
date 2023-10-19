import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/"/>
      </Routes>
    </div>  
    </BrowserRouter>
  )
}

export default App
