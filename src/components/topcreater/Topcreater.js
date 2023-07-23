import React from 'react'
import "./Topcreater.css"
import TopCreators from '../topcreatercards/Topcreatercards'
import img9 from "../../assets/Avatar.png"
import img10 from "../../assets/Artist Avatar.png"
import img11 from "../../assets/Artist Avatar1.png"
import img12 from "../../assets/Artist Avatar2.png"
import img13 from "../../assets/Artist Avatar3.png"
import img14 from "../../assets/Artist Avatar4.png"
import img15 from "../../assets/Artist Avatar5.png"
import img16 from "../../assets/Artist Avatar6.png"
import img17 from "../../assets/Artist Avatar7.png"
import img18 from "../../assets/Artist Avatar8.png"
import img19 from "../../assets/Artist Avatar9.png"
import img20 from "../../assets/Artist Avatar10.png"
import Button from '../button/Button'

function Topcreater() {
    return (
        <div>
            
            <div className='container p-5'>
                
                <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <TopCreators number="1"name="Keepitreal" image={img9}/>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <TopCreators number="2"name="DigiLab" image={img10}/>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <TopCreators number="3"name="GravityOne" image={img11}/>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <TopCreators number="4"name="Juanie" image={img12}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <TopCreators number="5" name="BlueWhale" image={img13}/>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <TopCreators number="6" name="mr fox" image={img14}/>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <TopCreators number="7" name="Shroomie" image={img15}/>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <TopCreators number="8" name="robotica" image={img16}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <TopCreators number="9" name="RustyRobot" image={img17}/>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <TopCreators number="10" name="animakid" image={img18}/>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <TopCreators number="11" name="Dotgu"image={img19}/>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <TopCreators number="12" name="Ghiblier"image={img20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topcreater