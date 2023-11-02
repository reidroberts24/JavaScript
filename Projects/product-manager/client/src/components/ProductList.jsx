import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = (props) => {
    const {products, setProducts} = props
    
    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then( res => {
                setProducts(res.data)
            })
            .catch( err => console.log(err))
    }, []);

    return (
        <div>
            <h2>Product List:</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={ index }>
                        <h3>{ product.title }</h3>
                        <p>Price: ${ product.price }</p>
                        <p>Description: { product.description }</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList