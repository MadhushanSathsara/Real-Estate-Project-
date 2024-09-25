import React from 'react'
import './Footer.css';
import { FaGooglePlay } from 'react-icons/fa';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='download-app-section'>
        <h1>Download The Alfa Land App</h1>
        <div className='app-links'>
          <div className='app-link'>
            <FaGooglePlay size={"1.5rem"} />
            <div className='app-info'>
              <p>Get on</p>
              <h1>Google Play</h1>
            </div>
          </div>
          <div className='app-link'>
            <IoLogoAppleAppstore size={"1.5rem"} />
            <div className='app-info'>
              <p>Get on</p>
              <h1>Apple Store</h1>
            </div>
          </div>
        </div>
      </div>

      <footer className='footer'>
        <div className='footer-content'>
          <h1>Alfa Real Estate</h1>
          <ul className='footer-links'>
            <li>Features</li>
            <li>Trending</li>
            <li>About us</li>
          </ul>
          <div className='social-icons'>
            <FiFacebook size={"2rem"} />
            <AiOutlineInstagram size={"2rem"} />
            <FiTwitter size={"2rem"} />
            <AiOutlineYoutube size={"1.5rem"} />
            
          </div>
          <p className='footer-description'>
            lorem ipsum
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
