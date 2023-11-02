import React, { useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = (props) => {
    const [products, setProducts] = useState([])

    return (
        <div className="container"> 
            <div className="row"> 
                <div> 
                    <ProductForm products={products} setProducts={setProducts} />
                </div>
            </div>
            <hr className="my-4"/>
            <div className="row">
                <div>
                    <ProductList products={products} setProducts={setProducts} />
                </div>
            </div>
        </div>
    )
}

export default Main;
