import React from 'react'
import "./Trendingcollection.css"
import Trendingcard from '../trendingcard/Trendingcard'
import img5 from "../../assets/Primary Photo Placeholder.png"
import img6 from "../../assets/Frame 228.png"
import img7 from "../../assets/Artist Card.png"
import img24 from "../../assets/Frame2.png";
import img25 from "../../assets/primary2.png";
import img26 from "../../assets/Frame2(1).png";
import img27 from "../../assets/1.png";
import img28 from "../../assets/Artist Card3.png"
import img29 from "../../assets/Frame 228 (1).png"




function Trendingcollection() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col text-white  trendingstyle'>
                    <h2>
                    Trending Collection
                    </h2>
                    <p>
                    Checkout our weekly updated trending collection.
                    </p>
                </div>
            </div>
            <div className='container'>
              <div className='row trendingcollectionrow mt-5'>
             <div className='col'>
              <Trendingcard image4={img5} image5={img6} image6={img7}/>
              </div>
             <div className='col'>
              <Trendingcard image4={img24} image5={img26} image6={img27}/>
              </div>
             <div className='col'>
              <Trendingcard image4={img25} image5={img29} image6={img28}/>
              </div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Trendingcollection