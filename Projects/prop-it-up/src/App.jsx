import { useState } from 'react'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <PersonCard 
        last={"Prime"}
        first={"Coach"}
        age={56}
        hairColor={"Black"}
        />
        <PersonCard 
        last={"Jackson"}
        first={"Bo"}
        age={60}
        hairColor={"N/A"}
        />
        <PersonCard 
        last={"Messi"}
        first={"Lionel"}
        age={36}
        hairColor={"N/A"}
        />
        <PersonCard 
        last={"Jordan"}
        first={"Michael"}
        age={60}
        hairColor={"N/A"}
        />
      </div>
  );
}

export default App
