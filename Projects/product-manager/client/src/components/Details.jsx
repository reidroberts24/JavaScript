import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
const Details = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then( res => {
                setProduct(res.data);
            })
            .catch( err => console.log(err));
    }, []);

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header text-center">
                    Product Details
                </div>
                <div className="card-body">
                    <h5 className="card-title">Product: { product.title }</h5>
                    <p className="card-text">Price: ${ product.price }</p>
                    <p className="card-text">Description: { product.description }</p>
                </div>
                <div className="card-footer">
                    <Link to="/home" className="btn btn-secondary">Return Home</Link>
                </div>
            </div>
        </div>
    );
}

export default Details;
