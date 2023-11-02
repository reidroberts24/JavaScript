import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState(""); //destructuring state variables
    const { products, setProducts} = props; //destructuring props object

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description // shorthand only works if the getter name matches schema name exactly
        })
            .then( res => {
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data]); //update the lifted state of the products array to include the current value in state
            })
            .catch( err => console.log(err));
    }
 
    return (
        <form className="d-flex flex-column align-items-center" onSubmit={ handleSubmit }>
            <div className="mb-3 w-50">
                <label className="form-label">Product Title:</label>
                <input className="form-control" type='text' onChange={ (e) => setTitle(e.target.value) }/>
            </div>
            <div className="mb-3 w-50">
                <label className="form-label">Price:</label>
                <input className="form-control" type='text' onChange={ (e) => setPrice(e.target.value) }/>
            </div>
            <div className="mb-3 w-50">
                <label className="form-label">Description:</label>
                <input className="form-control" type='text' onChange={ (e) => setDescription(e.target.value) }/>
            </div>
            <input className="btn btn-primary" type='submit' value="Submit"/>
        </form>
    )
}

export default ProductForm;
