import { useState } from 'react';
import Form from './components/Form';
import BoxDisplay from './components/BoxDisplay';
import './App.css';

function App() {
  const [colorsList, setColorsList] = useState([])

  const newColor = ( color ) => {
    setColorsList( [...colorsList, color] )
  }

  return (
    <>
      <Form onNewColor={ newColor }/>
      {
        colorsList.map( (color, index) =>
        <BoxDisplay key={ index } displayColor={ color }/>
        )
      }
    </>
  )
}

export default App;
