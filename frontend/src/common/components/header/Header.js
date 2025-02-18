import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsHouse, BsJustify } from 'react-icons/bs'
import SignUp from '../SignUp/SignUp'
import './Header.css'

function Header() {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
      navigate(route); // Navigate to the About page
  };
  return (
    <header className='header'>
      <div className='header-left'>
        <BsHouse className='icon' onClick={() => handleNavigation('/')} />
      </div>
      <div className='header-right'>
        <BsPersonCircle className='icon' onClick={() => handleNavigation('/signin')} />
      </div>
    </header>
  )
}

export default Header