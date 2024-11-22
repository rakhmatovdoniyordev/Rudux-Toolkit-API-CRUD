import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from '../pages/add/Add'
import Edit from '../pages/edit/Edit'
import Home from '../pages/home/Home'
import Layout from '../pages/layout/Layout'
import Wishlist from '../pages/wishlist/Wishlist'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/add' element={<Add/>}/>
        </Route>
    </Routes>
  )
}

export default Router