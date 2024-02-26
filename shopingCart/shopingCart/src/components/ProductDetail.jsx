import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
function ProductDetail() {
    let {id} = useParams()
    console.log(id);
    let product = useSelector(store => store.products)
    console.log(product);
    let individualProduct = product.find(product => product.name == id)
  return (
    <div>
        <h1>Product Detail</h1>
        <div>
            <h1>{individualProduct.name}</h1>
            <h3>{individualProduct.price}</h3>
            <p>{individualProduct.detail}</p>
        </div>
    </div>
  )
}

export default ProductDetail