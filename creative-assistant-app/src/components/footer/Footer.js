import React from 'react'
import './footer.css'
import omniLogo from '../../assets/OmniLogo.png'
import lablabLogo from '../../assets/lablab-logo.webp'
import briefoLogo from '../../assets/briefoLogo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <img src={briefoLogo} alt="Briefo Product Logo" width='60px' />
          <p id='txt-small--footer'>DEVELOPED BY:</p>
          <Link to='https://lablab.ai/event/openai-hackathon/omni' target={'_blank'}><img src={omniLogo} width="50px" alt="Omni Team Logo" /></Link>
      </div>
      <div className='footer-container2'>
        <p id='team-text'>Get to know our team, click on the lab-lab.ai logo:</p>
        <Link to='https://lablab.ai/event/openai-hackathon/omni' target={'_blank'}><img className='lablabLogo' src={lablabLogo} width='50px' alt="Lab-lab Logo" /></Link>
      </div>
    </footer>
  )
}

export default Footer