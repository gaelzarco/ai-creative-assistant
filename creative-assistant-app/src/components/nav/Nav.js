import React from 'react'
import './nav.css'
import briefoLogo from '../../assets/briefoLogo.png'

const Nav = () => {
  return (
    <nav>
      <img src={briefoLogo} width='50px' alt="Briefo Logo" />
        <ul>
            <li>Home</li>
        </ul>
    </nav>
  )
}

export default Nav