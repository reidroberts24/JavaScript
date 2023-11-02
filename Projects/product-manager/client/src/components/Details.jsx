import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then( res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch( err => console.log(err))
    }, [])

    return (
        <div>
            <p>Product: { product.title }</p>
            <p>Price: { product.price }</p>
            <p>Description: { product.description }</p>
        </div>
    )

}

export default Details