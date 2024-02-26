import React from 'react'
import {useSelector} from 'react-redux'
import Product from './Product'
function Products() {
    let productList = useSelector(store => store.products)
    console.log('product list');
  return (
    <div>
        {
            productList.map((item)=>(
              <Product name={item.name} price={item.price} id={item.id} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Products