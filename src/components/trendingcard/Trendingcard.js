import React from 'react'
import "./Trendingcard.css"



function Trendingcard(props) {
  return (
    <div>
    <div className='col-lg-4 col-md-4 col-sm-6'>
    <div class="card cardstyle2 bg-dark  mx-auto" >
  <img src={props.image4} class="card-img-top img-fluid img5style " alt="..."/>
  <div class="card-body">
    <img src={props.image5} className='img-fluid' />
    <p className='text-white mt-3'>DSGN Animals</p>
    <img src={props.image6} />
  </div>
</div>

    </div>





    </div>
  )
}

export default Trendingcard