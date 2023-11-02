import React, { useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'


const Main = (props) => {
    // establishing state here in the Main.js file is "lifted state"
    const [products, setProducts] = useState([])
    return (
        <div>
            <ProductForm products={ products } setProducts={ setProducts } />
            <hr/>
            <ProductList products={ products } setProducts={ setProducts } />
        </div>
    )
}

export default Main;