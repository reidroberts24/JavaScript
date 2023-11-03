import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';

const Update = (props) => {
    const navigate = useNavigate();    
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true)
            })
            .catch(err => console.log(err));
    }, []);

    const updateProduct = (productParam) => {
        axios.patch('http://localhost:8000/api/products/' + id, productParam) 
            .then( res => {
                console.log(res);
                navigate('/home');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='container mt-4'>
            <h1 className="text-center mb-4">Update a Product</h1>
            {
            loaded && (
            <>
                <ProductForm 
                onSubmitProp={ updateProduct } 
                initialTitle={ product.title } 
                initialPrice={ product.price } 
                initialDescription={ product.description } />
                <DeleteButton productID={ product._id } successCallback={() => navigate('/home')}/>
            </>
            )}
        </div>
    );
}

export default Update;
