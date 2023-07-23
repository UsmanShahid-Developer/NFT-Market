import React from 'react'
import img3 from "../../assets/Image Placeholder.png"
import img4 from "../../assets/Avatar Placeholder.png"
import "./Discoverdigitalart.css"
import Button from '../button/Button'

export default function Discoverdigitalart() {
    return (
        <div>
            <div className='container'>
                <div className='row rowstyle'>
                    <div className='col-lg-6 col-md-6 col-sm-12 text-white'>
                        <h1 className='fw-bolder'>Discover <br /> digital art & <br />Collect NFTs</h1>
                        <p>NFT marketplace UI created with Anima for  <br />Figma. Collect, buy and sell art from more  <br /> than 20k NFT artists.</p>
                        <Button/>
                        <br/>
                       <div className='row'>
                        <div className='col'>
                            <h3>240k+</h3>
                        <p>Total Sale</p>
                        
                        </div>
                        
                        <div className='col'>
                        <h3>100k+</h3>
                        <p>Auctions</p>
                        </div>
                        <div className='col'>
                        <h3>240k+</h3>
                        <p>Artists</p>
                        </div>

                       </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div class="card bg-dark cardstyle" >
                            <img src={img3}class="card-img-top" alt="..."/>
                                <div class="card-body bg-dark">
                                    <h5 class="card-title bg-dark text-white">Space Walking</h5>
                                   <img src={img4} className='img4style text-white' /> <span class="card-text bg-dark text-white">Animakid</span>
                                    
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
