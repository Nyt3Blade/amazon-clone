import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
        <h1>Amazon Clone</h1>
        <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />

        <div className='header__search'></div>

        <div className='header__info'></div>
    </div>
  )
}

export default Header