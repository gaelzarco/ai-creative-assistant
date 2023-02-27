import React from 'react'
import Nav from '../nav/Nav'
import headerImg from '../../assets/img1.png'
const Header = () => {
  return (
    <header>
      <Nav/>
      <img src={headerImg} width='500px' alt="" />
    </header>
  )
}

export default Header