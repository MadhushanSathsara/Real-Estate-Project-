import React from 'react';
import './BestDeals.css';
import property1 from '../../assets/property_2.png';
import property2 from '../../assets/property_17.png';
import property3 from '../../assets/property_10.png';
import property4 from '../../assets/property_5.png';
import property5 from '../../assets/property_14.png';
import property6 from '../../assets/property_8.png';
import property7 from '../../assets/property_12.png';
import { IoLocateOutline } from 'react-icons/io5';

const BestDeals = () => {
  return (
    <div>
      <div className='header'>
        <h1 className='header-title'>Best Deals</h1>
        <p className='header-description'>Find the best real estate deals at unbeatable prices.</p>
      </div>
      <div className='deals'>
        <div className='deal large relative'>
          <img src={property5} alt="Property 1" className='deal-image' />
          <div className='deal-info'>
            <h1 className='deal-title'>Place</h1>
            <p className='deal-location'><IoLocateOutline size="1.2rem" /> High Street, Kandy</p>
          </div>
        </div>
        <div className='deal relative'>
          <img src={property2} alt="Property 2" className='deal-image' />
          <div className='deal-info'>
            <h1 className='deal-title'>Place</h1>
            <p className='deal-location'><IoLocateOutline size="1.2rem" /> High Street, Kandy</p>
          </div>
        </div>
        <div className='deal relative'>
          <img src={property3} alt="Property 3" className='deal-image' />
          <div className='deal-info'>
            <h1 className='deal-title'>Place</h1>
            <p className='deal-location'><IoLocateOutline size="1.2rem" /> High Street, Kandy</p>
          </div>
        </div>
        <div className='deal relative'>
          <img src={property4} alt="Property 4" className='deal-image' />
          <div className='deal-info'>
            <h1 className='deal-title'>Place</h1>
            <p className='deal-location'><IoLocateOutline size="1.2rem" /> High Street, Kandy</p>
          </div>
        </div>
        <div className='deal relative'>
          <img src={property7} alt="Property 5" className='deal-image' />
          <div className='deal-info'>
            <h1 className='deal-title'>Place</h1>
            <p className='deal-location'><IoLocateOutline size="1.2rem" /> High Street, Kandy</p>
          </div>
        </div>
      </div>
      <div className='view-more-container'>
        <button className='view'>View More</button>
      </div>
    </div>
  );
};

export default BestDeals;
