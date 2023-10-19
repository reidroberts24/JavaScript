import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import './App.css'

const Home = (props) => {
  return(
      <h1>Welcome!</h1>
  )
}

const ShowPath = (props) => {
  //useParams to get all 3 variables
  const { param1, param2, param3} = useParams();
  if (!isNan(param1)) {
    return(
      <h1>The number is: { param1 }</h1>
    )
  } 

  if (param2 && param3) {
    return(
      <h1 style={{ color: param2, backgroundColor: param3}}>The word is: { param1 }</h1>
    )
  }
  
  if (param2) {
    return(
      <h1 style={{ color: param2}}>The word is: { param1 }</h1>
    )
  }

  return(
    <h1>The word is: { param1 }</h1>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/:param1/:param2/:param3' element={ <ShowPath/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
