import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div> <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo/Home Link */}
      <Link to="/" className="text-white font-bold text-lg">
        My Store
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-4">
        {/* Home Link */}
        <li>
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
        </li>

        {/* Cart Link */}
        <li>
          <Link
            to="/cart"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Cart
          </Link>
        </li>
      </ul>
    </div>
  </nav>
</div>
  )
}

export default Navbar 