import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pokeList, setPokeList] = useState([])

  useEffect( () => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
          return response.json()
        })
        .then( response => {
          setPokeList(response.results)
        })
        .catch((err) => {
          console.log(err)
        })
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
