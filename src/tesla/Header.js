/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../images/logo.svg'

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <ul>
        <li><a href="">Model 3</a></li>
        <li><a href="">Model S</a></li>
        <li><a href="">Model X</a></li>
        <li><a href="">Model Y</a></li>
        <li><a href="">Solar Roof</a></li>
        <li><a href="">Solar Panels</a></li>
      </ul>

      <ul>
        <li><a href="">Shop</a></li>
        <li><a href="">Account</a></li>
        <li><a href="">Menu</a></li>
      </ul>
    </header>
  )
}

export default Header