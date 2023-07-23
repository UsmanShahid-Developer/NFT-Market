import logo from './logo.svg';
import './App.css';

import Homepage from './pages/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Trendingcard from './components/treandingcard/Trendingcard';
import Discoverdigitalart from './components/discoverdigitalart/Discoverdigitalart';






function App() {

  return (
    <div className="App">
      <Navbar/>
      <Trendingcard/>
      <Discoverdigitalart/>
    </div>
  );
}

export default App;
