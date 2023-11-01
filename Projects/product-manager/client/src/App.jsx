import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ProductForm/>
    </div>
  )
}

export default App
