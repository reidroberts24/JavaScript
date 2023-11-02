import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { products, setProducts } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const removeFromDom = productID => {
        setProducts(products.filter(product => product._id != productID))
    }

    const deleteProduct = (productID) => {
        axios.delete('http://localhost:8000/api/products/' + productID)
            .then(res => { removeFromDom(productID) })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <h2 className="text-center mb-4">Product List:</h2>
            <ul className="list-group">
                {products.map((product, index) => (
                    <li key={ index } className="list-group-item d-flex justify-content-between align-items-center">
                        <span>
                            <Link to={`/home/${product._id}`}>{ product.title }</Link>
                        </span>
                        <div>
                            <Link to={`/home/edit/${product._id}`} className="btn btn-warning ms-4 me-2">Edit</Link> {/* Added margin to the left of Edit button */}
                            <button onClick={(e) => { deleteProduct(product._id) }} className="btn btn-danger">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
