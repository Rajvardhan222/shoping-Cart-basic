import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,Route} from "react-router-dom"
import Cart from './components/Cart.jsx'
import ListofProduct from './components/ListofProduct.jsx'
import ProdDetail from './components/ProdDetail.jsx'
import CartCOntextProvider from './CartCOntextProvider.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path : "/prodList",
        element: <ListofProduct/>
        
      },
      {
        path: '/:id',
        element:<ProdDetail/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartCOntextProvider>
   <RouterProvider router={router}/>
   </CartCOntextProvider>
  </React.StrictMode>
)
