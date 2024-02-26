import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { createBrowserRouter,RouterProvider,Route} from "react-router-dom"
import Products from './components/Products.jsx'
import store from './redux/store.js'
import ProductDetail from './components/ProductDetail.jsx'
import CartProvider from './context/Provider.jsx'
import Cart from './components/Cart.jsx'
const router = createBrowserRouter([
 { path:"/",
  element:<App/>,
  children:[
   { path:'/',
    element:<Products/>
   },
   {
    path: '/:id',
    element:<ProductDetail/>
   },
   {
    path: '/cart',
    element:<Cart/>
   }
  ]

}

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <Provider store={store}>
   <RouterProvider router={router}></RouterProvider></Provider>
   </CartProvider>
  </React.StrictMode>,
)
