import React from 'react'
import { useCart } from '../context/cartContext'
import { useSelector } from 'react-redux'


function Cart() {
    let {cart,setCart} = useCart()
    let prod = useSelector(store => store.products)
    let total = 0;
    cart.forEach(id => {
        // Find the product object with the matching id
        const product = prod.find(obj => obj.id == id.id);

        // If product with matching id is found, add its price to the total
        if (product) {
            total += product.price;
        }
    });
  return (
        <>
    <div>Cart</div>
    <h1>{total}</h1>
    </>
  )
}

export default Cart