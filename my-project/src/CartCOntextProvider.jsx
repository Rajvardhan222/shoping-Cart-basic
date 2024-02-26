import React from 'react'
import CartContext from './context/cartContext'
import ListofProduct from './components/ListofProduct'

function CartCOntextProvider({children}) {
    const [cart, setCart] = React.useState([])
  let addCart = (amt) => {
    setCart([...cart, amt])
  }
  return (
    <div>
        
        <CartContext.Provider value={{cart,addCart}}>
           <ListofProduct></ListofProduct>
        </CartContext.Provider>
    </div>
  )
}

export default CartCOntextProvider