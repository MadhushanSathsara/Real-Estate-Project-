import './App.css';
import Home from './components/Home/Home';
import BestDeals from './components/BestDeals/BestDeals';
import NewestDeal from './components/NewestDeal/NewestDeal';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Content from './components/Content/Content';

function App() {
  return (
    <BrowserRouter>

    {/* <div className="App app-container"> */}
      
      <Routes>
        <Route exact path="/" element={<Content />}/>
        <Route path="/bestdeals" element={<BestDeals/>}/>
       </Routes>



    

    </BrowserRouter>
  );
}

export default App;
