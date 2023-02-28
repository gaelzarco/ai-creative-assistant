import React from 'react'
import './footer.css'
import omniLogo from '../../assets/OmniLogo.png'
import lablabLogo from '../../assets/lablab-logo.webp'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
          <p id='txt-small--footer'>DEVELOPED BY:</p>
          <img src={omniLogo} width="50px" alt="Omni Team Logo" />
      </div>
      <div className='footer-container2'>
        <p id='team-text'>Get to know our team, click on the Lab-lab.ai logo:</p>
        <img className='lablabLogo' src={lablabLogo} width='50px' alt="Lab-lab Logo" />
      </div>
    </footer>
  )
}

export default Footer