import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [pokeList, setPokeList] = useState([])

  useEffect( () => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {setPokeList(response.data.results)})
    }, []);

  return (
    <>
      <div className="App">
        <ul>
          {
            pokeList.map((pokemon, index) => {
              return(<li key={ index }>{ pokemon.name }</li>)
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
