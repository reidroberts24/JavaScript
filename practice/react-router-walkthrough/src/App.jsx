import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const Home = (props) => {
  return(
    <div>
      <h1 style={{ color: "red" }}>
        Home Component
      </h1>
      <Link to={ "/about" }>Go to About</Link>
    </div>
  )
}

const About = (props) => {
  return(
    <div>
      <h1 style={{ color: "blue" }}>
        About Component
      </h1>
      <Link to={ "/" }>Go back Home</Link>
    </div>
  )
}
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
