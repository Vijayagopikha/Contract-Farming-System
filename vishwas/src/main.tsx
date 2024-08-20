import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Error from './pages/Error'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

import Layout from './components/Layout'
import Market from './pages/market/Market'
import NewLoginDetails from './pages/signup/NewLoginDetails'
import Contract from './pages/signup/contract'
import P from './pages/profile/P'
import CropDetails from './pages/market/components/CropDetails'
import FarmerProfile from './pages/profile/Test'
import T from './pages/profile/T'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      errorElement:<Error/>,
      children:[
        {index:true, element:<Home />},
        {path:"/login",element:<Login/>},
        {path:"/signup",element:<Signup/>},
        {path:"/market",element:<Market/>},
        {path:"/nld",element:<NewLoginDetails/>},
        {path:"/contract",element:<Contract/>},
        {path:"/profile",element:<P/>},
        {path:"/cropdetail/:id",element:<CropDetails/>},
        {path:"/test",element:<T/>},
      ]
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)