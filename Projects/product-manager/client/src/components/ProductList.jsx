import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; //styling

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
                        <h3>
                            <Link to={ `/home/${product._id}`}>{ product.title }</Link>
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList