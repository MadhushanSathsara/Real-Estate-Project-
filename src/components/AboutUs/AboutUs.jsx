import React from 'react';
import './AboutUs.css';
import { MdHomeRepairService } from 'react-icons/md';

const AboutUs = () => {
  return (
    <div className='container'>
      <div className='services-section'>
        <div className='service-col'>
          <div className='service-box'>
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className='service-title'>Good Services</h1>
            <p className='service-description'>lorem ipsum dolor sit</p>
          </div>
          <div className='service-box'>
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className='service-title'>Good Services</h1>
            <p className='service-description'>lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className='service-col'>
          <div className='service-box'>
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className='service-title'>Good Services</h1>
            <p className='service-description'>lorem ipsum dolor sit</p>
          </div>
          <div className='service-box'>
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className='service-title'>Good Services</h1>
            <p className='service-description'>lorem ipsum dolor sit</p>
          </div>
        </div>
      </div>
      <div className='about-us-text'>
        <h1 className='about-title'>
          Know<span className='highlight'> About us</span>
        </h1>
        <p className='about-description'>At Alfa Land, we believe that every dream starts with a vision. Founded with the mission of turning aspirations into reality, we specialize in providing premium real estate opportunities in prime locations. Whether you're seeking to buy land for your dream home or invest in future development, our expert team is here to guide you every step of the way. With a deep understanding of the local market and a commitment to transparency, we offer reliable and personalized services that make your real estate journey seamless and fulfilling. At Alfa Land, your dreams are our foundation.</p><br/>
        <button className='read'>Read More</button>
      </div>
    </div>
  );
};

export default AboutUs;
