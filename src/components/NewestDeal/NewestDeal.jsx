import React from 'react';
import './NewestDeal.css';
import { BsSuitHeart } from 'react-icons/bs';
import { IoBedOutline, IoLocateOutline } from 'react-icons/io5';
import { GiBathtub, GiHomeGarage } from 'react-icons/gi';

import property1 from '../../assets/property_1.png';
import property2 from '../../assets/property_2.png';
import property3 from '../../assets/property_3.png';
import property4 from '../../assets/property_4.png';
import property5 from '../../assets/property_5.png';
import property6 from '../../assets/property_6.png';
import property7 from '../../assets/property_7.png';
import property8 from '../../assets/property_8.png';
import property9 from '../../assets/property_9.png';
import property10 from '../../assets/property_10.png';
import property11 from '../../assets/property_11.png';
import property12 from '../../assets/property_12.png';
import property13 from '../../assets/property_13.png';
import property14 from '../../assets/property_14.png';
import property15 from '../../assets/property_15.png';
import property16 from '../../assets/property_16.png';

const NewestDeal = () => {
  const dealsData = [
    {
      id: 1,
      image: property1,
      beds: 5,
      baths: 3,
      garage: 1,
      price: '$110,000',
      location: 'New Street, Colombo',
    },
    {
      id: 2,
      image: property2,
      beds: 4,
      baths: 2,
      garage: 1,
      price: '$120,000',
      location: 'High Street, Kandy',
    },
    {
      id: 3,
      image: property3,
      beds: 3,
      baths: 2,
      garage: 1,
      price: '$130,000',
      location: 'Galle Road, Galle',
    },
    {
      id: 4,
      image: property4,
      beds: 6,
      baths: 4,
      garage: 2,
      price: '$140,000',
      location: 'Main Street, Negombo',
    },
    {
      id: 5,
      image: property5,
      beds: 2,
      baths: 1,
      garage: 1,
      price: '$80,000',
      location: 'Lake Road, Nuwara Eliya',
    },
    {
      id: 6,
      image: property6,
      beds: 4,
      baths: 3,
      garage: 1,
      price: '$150,000',
      location: 'Park Avenue, Colombo',
    },
    {
      id: 7,
      image: property7,
      beds: 5,
      baths: 3,
      garage: 2,
      price: '$160,000',
      location: 'Hill Top, Kandy',
    },
    {
      id: 8,
      image: property8,
      beds: 3,
      baths: 2,
      garage: 1,
      price: '$100,000',
      location: 'Beach Road, Matara',
    },
    {
      id: 9,
      image: property9,
      beds: 4,
      baths: 3,
      garage: 1,
      price: '$140,000',
      location: 'River Side, Bentota',
    },
    {
      id: 10,
      image: property10,
      beds: 3,
      baths: 2,
      garage: 1,
      price: '$90,000',
      location: 'Market Street, Kurunegala',
    },
    {
      id: 11,
      image: property11,
      beds: 5,
      baths: 3,
      garage: 2,
      price: '$170,000',
      location: 'Palm Street, Colombo',
    },
    {
      id: 12,
      image: property12,
      beds: 4,
      baths: 3,
      garage: 1,
      price: '$150,000',
      location: 'City Center, Jaffna',
    },
    {
      id: 13,
      image: property13,
      beds: 3,
      baths: 2,
      garage: 1,
      price: '$120,000',
      location: 'Old Road, Kandy',
    },
    {
      id: 14,
      image: property14,
      beds: 2,
      baths: 1,
      garage: 1,
      price: '$70,000',
      location: 'East Street, Batticaloa',
    },
    {
      id: 15,
      image: property15,
      beds: 4,
      baths: 2,
      garage: 2,
      price: '$180,000',
      location: 'Hill Side, Ella',
    },
    {
      id: 16,
      image: property16,
      beds: 5,
      baths: 3,
      garage: 1,
      price: '$200,000',
      location: 'Golden Road, Colombo',
    },
  ];

  return (
    <div className='py-10'>
      <h1 className='text-4xl font-bold'>Newest Deals</h1>

      <div className='deals grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-10'>
        {dealsData.map(deal => (
          <div className='deal-card h-[300px] bg-white drop-shadow-2xl rounded-xl' key={deal.id}>
            <div className='relative w-full'>
              <img src={deal.image} alt="Property" className='w-full object-cover rounded-t-xl' />
              <div className='absolute top-0 right-0 p-4'>
                <BsSuitHeart size={"1.5rem"} className='text-white' />
              </div>
            </div>

            <div className="p-4">
              <div className="deal-features flex justify-between mb-2">
                <div className="feature-item flex items-center gap-0">
                  <IoBedOutline />
                  <p>{deal.beds} beds</p>
                </div>
                <div className="feature-item flex items-center gap-0">
                  <GiBathtub />
                  <p>{deal.baths} baths</p>
                </div>
                <div className="feature-item flex items-center gap-0">
                  <GiHomeGarage />
                  <p>{deal.garage} garage</p>
                </div>
              </div>
              <p className='font-bold text-lg'>{deal.price}</p>
              <div className='flex items-center gap-1 mt-1'>
                <IoLocateOutline />
                <p>{deal.location}</p>
              </div>
            </div>
          </div>
        ))}
        
      
      
      </div>
      <div className="view-more-container flex justify-center py-4">
          <button className='view'>View More</button>
        </div>
        
      
    </div>
  );
};

export default NewestDeal;
