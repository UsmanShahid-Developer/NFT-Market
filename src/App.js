import logo from './logo.svg';
import './App.css';

import Homepage from './pages/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Trendingcard from './components/treandingcollection/Trendingcollection';
import Discoverdigitalart from './components/discoverdigitalart/Discoverdigitalart';
import Discovernft from './components/discovernft/Discovernft';
import Topcreater from './components/topcreater/Topcreater';
import Browsercatagory from './components/browsercatagory/Browsercatagory';
import img30 from "./assets/NFT Highlight.png";
import Footer from './components/footer/Footer';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Discoverdigitalart/>
      <Trendingcard/>
      <Topcreater/>
      <Discovernft/>
      <Browsercatagory/>
       <img src={img30} className='img-fluid mt-3'/>
      <Footer/>
    </div>
  );
}

export default App;
