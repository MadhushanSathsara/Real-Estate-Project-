import React from 'react'
import Home from '../Home/Home'
import BestDeals from '../BestDeals/BestDeals'
import NewestDeal from '../NewestDeal/NewestDeal'
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../Footer/Footer'
import '../../App.css'


function Content() {
  return (
    <div className="app-container">
       <Home/>
      <BestDeals/>
      <NewestDeal/>
      <AboutUs/>
      <Footer/> 
    </div>
  )
}

export default Content
