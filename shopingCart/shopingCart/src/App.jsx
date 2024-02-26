import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
 

  return (
   <>
      <Navbar></Navbar>
      <Outlet/>
   
  </>
  )
}

export default App
