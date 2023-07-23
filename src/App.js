import logo from './logo.svg';
import './App.css';

import Homepage from './pages/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Trendingcard from './components/treandingcollection/Trendingcollection';
import Discoverdigitalart from './components/discoverdigitalart/Discoverdigitalart';
import Discovernft from './components/discovernft/Discovernft';
import Topcreater from './components/topcreater/Topcreater';





function App() {

  return (
    <div className="App">
      <Navbar/>
      <Discoverdigitalart/>
      <Trendingcard/>
      <Discovernft/>
      <Topcreater/>
    </div>
  );
}

export default App;
