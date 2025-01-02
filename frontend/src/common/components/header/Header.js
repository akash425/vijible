import React from 'react'
import { BrowserRouter, Link, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs'
import SignUp from '../SignUp/SignUp'
import './Header.css'

function Header({ OpenSidebar }) {
  const router = createBrowserRouter([
    {
      path: '/signup',
      element: <SignUp />,
    }
  ]);
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <BsSearch className='icon' />
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' >
        <BrowserRouter>
          <Link to='/signup'>Sign Up</Link>
        </BrowserRouter>
        </BsPersonCircle>
        {/* <RouterProvider router={router} /> */}
      </div>
    </header>
  )
}

export default Header