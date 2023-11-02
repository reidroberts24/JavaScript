import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then( res => {
                console.log(res);
                navigate('/home');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Update a Product</h1>
            <form className="d-flex flex-column align-items-center" onSubmit={ updateProduct }>
                <div className="mb-3 w-50">
                    <label className="form-label">Title:</label>
                    <input type="text" className="form-control" 
                        name="title" 
                        value={ title }
                        onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className="mb-3 w-50">
                    <label className="form-label">Price:</label>
                    <input type="text" className="form-control"
                        name="price"
                        value={ price } 
                        onChange={(e) => { setPrice(e.target.value) }} />
                </div>
                <div className="mb-3 w-50">
                    <label className="form-label">Description:</label>
                    <input type="text" className="form-control"
                        name="description"
                        value={ description } 
                        onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary">Update Product</button>
            </form>
        </div>
    );
}

export default Update;
