import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"
import img1 from "../../assets/Storefront.png"
import img2 from "../../assets/User.png"
import Button from '../button/Button';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navstyle">
  <div className="container-fluid m-3 ">
    <a className="navbar-brand text-white" href="#">
      <img src={img1} /> NFT Marketplace
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navstyle">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Marketplace</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Rankings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Connect a wallet</a>
        </li>
       <Button/>
        {/* <button className='text-white btn  signupbtn'> <img src={img2} className='img2style' /> Sign Up</button> */}
    
      </ul>
    
    </div>
  </div>
</nav>
  )
}

export default Navbar;
  
