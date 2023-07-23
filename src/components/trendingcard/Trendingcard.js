import React from 'react'
import "./Trendingcard.css"
import img5 from "../../assets/Primary Photo Placeholder.png"
import img6 from "../../assets/Frame 228.png"
import img7 from "../../assets/Artist Card.png"


function Trendingcard() {
  return (
    <div>
    <div className='col-lg-4 col-md-4 col-sm-6'>
    <div class="card cardstyle2 bg-dark  mx-auto" >
  <img src={img5} class="card-img-top img-fluid img5style " alt="..."/>
  <div class="card-body">
    <img src={img6} className='img-fluid' />
    <p className='text-white mt-3'>DSGN Animals</p>
    <img src={img7} />
  </div>
</div>

    </div>





    </div>
  )
}

export default Trendingcard