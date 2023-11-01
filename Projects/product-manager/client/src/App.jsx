import { useState } from 'react'
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
