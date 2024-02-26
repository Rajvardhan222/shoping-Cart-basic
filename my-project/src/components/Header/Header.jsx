import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
        <div className ='p-4 bg-sky-300 rounded-md'>
            <div >
                <NavLink to='/prodList' className={({isActive})=> isActive ? "text-red-500" : "text-black"}>Home</NavLink>
                <NavLink to="/cart" className={({isActive})=> isActive ? "text-red-500 ml-6" : "text-black ml-6" }>My Cart</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header