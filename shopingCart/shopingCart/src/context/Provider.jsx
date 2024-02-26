import React, { useState } from 'react'
import { useCart } from './cartContext'
import CartContext from './cartContext'
function CartProvider({children}) {
    let [cart,setCart] = useState([])
  return (
  <CartContext.Provider value={{cart,setCart}}>
    {children}
  </CartContext.Provider>
   
  )
}

export default CartProvider