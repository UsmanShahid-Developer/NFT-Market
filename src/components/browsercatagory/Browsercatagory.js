import React from 'react'
import "./Browsercatagory.css"
import Browsercard from '../browsercard/Browsercard'
import img21 from "..//../assets/Photo & Icon.png"
import img22 from "..//../assets/Photo & Icon2.png"
import img23 from "..//../assets/Photo & Icon3.png"
import img24 from "..//../assets/Category Icon (1).png"
import img25 from "..//../assets/Category Icon (2).png"
import img26 from "..//../assets/Category Icon (3).png"
import img27 from "..//../assets/Category Icon (4).png"
import img28 from "..//../assets/Category Icon.png"

export default function Browsercatagory() {
    return (
        <div>
            <div className='container text-white h2style'>
                <h2 className='m-5 h2style'>Browse Categories</h2>

                <div className='row paddingbrowser'>
                    <div className='col-lg-3 col-md-6 col-sm-12'><Browsercard image2={img21} name="Art"/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'><Browsercard image2={img22} name="Collectibles"/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'><Browsercard image2={img23} name="Music"/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'><Browsercard image2={img24} name="Photograph"/>
                    </div>
                </div>
                <div className='row paddingbrowser'>
                    <div className='col-lg-3 col-md-6 col-sm-12'><Browsercard image2={img25} name="ArVideot"/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'><Browsercard image2={img26} name="Utility"/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'><Browsercard image2={img27} name="Sport"/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'><Browsercard image2={img28} name="Virtual "/>
                    </div>
                </div>




            </div>
        </div>
    )
}
