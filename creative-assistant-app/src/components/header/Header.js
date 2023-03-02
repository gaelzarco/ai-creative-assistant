import React from 'react'
import Nav from '../nav/Nav'
import './header.css'
import headerImg from '../../assets/img1.png'
import omniLogo from '../../assets/OmniLogo.png'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <Nav/>
      <div className="banner-container">
        <div className="left-container">
          <div className="txt-container">
          <h1 className='banner-tittle'>Create instant <br /> brief templates</h1>
          <p>Introducing Briefo, the ultimate solution to generate creative brief templates in seconds! With just a few clicks, you can provide the campaign context and sections, and Briefo will take care of the rest, saving you valuable hours. You're going to love it! Try Briefo today!</p>
          <Button align={{alignSelf: 'start'}}><a href='#section2'>Try it now!</a></Button>
          <p id='txt-small'>DEVELOPED BY:</p>
          <Link to='https://lablab.ai/event/openai-hackathon/omni' target={'_blank'}><img src={omniLogo} width="50px" alt="Omni Team Logo" /></Link>
          </div>
        </div>
        <div className="right-container">
          <img src={headerImg} height='120%' alt="Person typing on computer" />
        </div>
      </div>
    </header>
  )
}

export default Header