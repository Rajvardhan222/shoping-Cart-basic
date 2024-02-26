import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/cartContext'
import CartCOntextProvider from '../CartCOntextProvider'

function ListofProduct() {
  let {cart} = useContext(CartContext)
  return (
    <CartCOntextProvider >
      
    <div>
        <div className='mt-3'>
  <div className='flex flex-row bg-yellow-100 justify-around p-5 mt-3'>
    <p>
     <Link to="/Sunflower-Oil">Sunflower Oil</Link> 
      </p>
    <p>100</p>
    <button
    
    >Add</button>
  </div>

  <div className='flex flex-row bg-yellow-100 justify-around p-5 mt-4'>
    <p>
      <Link to="/Apple">Apple</Link>
      </p>
    <p>50</p>
    <button>Add</button>
  </div>

  <div className='flex flex-row bg-yellow-100 justify-around p-5 mt-4'>
    <p>
      Orange Juice</p>
    <p>80</p>
    <button>Add</button>
  </div>

  <div className='flex flex-row bg-yellow-100 justify-around p-5 mt-4'>
    <p>
      Chicken Breast</p>
    <p>120</p>
    <button>Add</button>
  </div>

  <div className='flex flex-row bg-yellow-100 justify-around p-5 mt-4'>
    <p>
      Banana</p>
    <p>40</p>
    <button>Add</button>
  </div>

  <div className='flex flex-row bg-yellow-100 justify-around p-5 mt-4'>
    <p>
      Rice</p>
    <p>60</p>
    <button>Add</button>
  </div>

  <div className='flex flex-row bg-yellow-100 justify-around p-5 mt-4'>
    <p>
      Milk</p>
    <p>30</p>
    <button>Add</button>
  </div>

  <div className='flex flex-row bg-yellow-100 justify-around p-5 mt-4'>
    <p>
      Tomato</p>
    <p>20</p>
    <button>Add</button>
  </div>

  <div className='flex flex-row bg-yellow-100 justify-around p-5 mt-4'>
    <p>
      Coffee</p>
    <p>90</p>
    <button>Add</button>
  </div>

  <div className='flex flex-row bg-yellow-100 justify-around p-5 mt-4'>
    <p>
      Chocolate</p>
    <p>70</p>
    <button>Add</button>
  </div>
</div>

    </div>
    </CartCOntextProvider>
  )
}

export default ListofProduct