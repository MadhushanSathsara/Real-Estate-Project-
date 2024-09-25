import React from 'react';
import './Home.css';
import homeImg from '../../assets/header_img.png';
import logoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {}
      <nav className="home__navbar">
        <div className="home__logo">
          <img src={logoImg} alt="Logo" />
        </div>
        <div className="logo-title">
             <h1>Alfa Land</h1>
             <p>Everything starts with a dream</p>
        </div>
        <ul className="home__menu">
       
          <li><Link to="/bestdeals">Best Deals</Link></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#aboutus">About</a></li>
        </ul>
        <button className="home__button">Contact</button>
      </nav>
      

      {}
      <div className="home__image-wrapper">
        <img src={homeImg} alt="Home" className="home__image" />
        {}
        
        <div className="home__search-bar">
          <div className="home__search-bar-container">
            <div className="home__search-field">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                placeholder="US"
                className="home__search-input"
              />
            </div>
            <div className="home__search-field">
              <label htmlFor="property">Property</label>
              <input
                type="text"
                placeholder="Property"
                className="home__search-input"
              />
            </div>
            <div className="home__search-field">
              <label htmlFor="price">Max Price</label>
              <input
                type="text"
                placeholder="$100,000"
                className="home__search-input"
              />
            </div>
            <div>
              <button className="home__search-button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
