import React from 'react'
import "./Discovernft.css"
import Button from '../button/Button'
import Discovernftcard from '../discovernftcard/Discovernftcard'
import img8 from "../../assets/NFT Card.png"
import img81 from "../../assets/NFT Card (1).png"
import img82 from "../../assets/NFT2 Card.png"


function Discovernft() {
  return (
    <div>
       <div className='container'>
            <div className='row'>
                <div className='col-lg-7 col-md-7  text-white discoverstyle '>
                    <h2>
                    Discover More NFTs   </h2>
                    <p>
                    Explore new trending NFTs     </p>
                </div>
                <div className='col-lg-3 col-md-3 text-white  button2style ms-5'>
                <Button/>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 mx-auto'>
                        <Discovernftcard image3={img8} />
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mx-auto'>
                    <Discovernftcard image3={img81}/>

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mx-auto'>
                    <Discovernftcard image3={img82}/>

                    </div>
                </div>








            </div>
        </div>
    </div>
  )
}

export default Discovernft