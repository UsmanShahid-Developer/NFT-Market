import React from 'react'
import "./Discovernft.css"
import Button from '../button/Button'
import Discovernftcard from '../discovernftcard/Discovernftcard'

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
                        <Discovernftcard/>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mx-auto'>
                    <Discovernftcard/>

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mx-auto'>
                    <Discovernftcard/>

                    </div>
                </div>








            </div>
        </div>
    </div>
  )
}

export default Discovernft