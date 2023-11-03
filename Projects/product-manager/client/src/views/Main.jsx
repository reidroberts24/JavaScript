import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then( res => {
                setProducts(res.data)
            })
            .catch( err => console.log(err))
    }, [])

    const removeFromDom = productID => {
        axios.delete('http://localhost:8000/api/products/' + productID)
            .then( (res) => {
                console.log(res)
                console.log(res.data)
                setProducts(products.filter(product => product._id !== productID)) //filter needs to be called on the state variable 'products' and not the list component ProductList
            })
    }

    const createProduct = productParam => {
        axios.post('http://localhost:8000/api/products', productParam)
            .then( res => {
                console.log(res)
                console.log(res.data)
                setProducts([...products, res.data])
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container"> 
            <div className="row"> 
                <div> 
                    <ProductForm onSubmitProp={ createProduct } initialTitle="" initialPrice="" initialDescription=""/> {/* the props passed to the ProductForm component are: onSubmitProp, initialTitle, etc. */}
                </div>
            </div>
            <hr className="my-4"/>
            <div className="row">
                <div>
                    <ProductList products={products} removeFromDom={removeFromDom} /> {/* the props passed to the ProductList component are: products, removeFromDom */}
                </div>
            </div>
        </div>
    )
}

export default Main;
