import { useState } from 'react'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <PersonCard />
      </div>
  );
}

export default App
