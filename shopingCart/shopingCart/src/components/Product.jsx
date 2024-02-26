import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'
function Product({
    name,price,description,id
}) {

    let {cart,setCart} = useCart()
    const isItemInCart = cart.some(item => item.id === id);
   let [isthere,setIsThere] = useState(false)
  return (
    <div>
       <div className='flex justify-around bg-pink-200 mt-5 p-5 rounded-md'>
        <p><Link to={`/${name}`}>
            {name}
            </Link>
            </p>
        <p>{price}</p>
        <button
        onClick={()=>{
           
            if(!isItemInCart) setCart([...cart,{id:id}])
            setIsThere(true)
        }}
        >Add</button>

        </div> 
    </div>
  )
}

export default Product