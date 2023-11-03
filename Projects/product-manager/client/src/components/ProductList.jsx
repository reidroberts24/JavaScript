import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


const ProductList = (props) => {
    const { products, removeFromDom } = props;

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
                            <DeleteButton productID={ product._id} successCallback={() => removeFromDom(product._id)} className="btn btn-danger" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
