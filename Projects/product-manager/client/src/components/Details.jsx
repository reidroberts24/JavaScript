import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Details = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then( res => {
                setProduct(res.data);
            })
            .catch( err => console.log(err));
    }, []);

    const deleteProduct = (productID) => {
        axios.delete('http://localhost:8000/api/products/' + productID)
            .then(res => { navigate('/home') })
            .catch(err => console.log(err));
    }

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
                    <Link to="/home" className="btn btn-secondary mr-2">Return Home</Link> {/* Added margin-right here */}
                    <button onClick={() => deleteProduct(product._id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Details;
