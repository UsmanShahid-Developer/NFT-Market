import React from 'react'
import "./Trendingcollection.css"
import Trendingcard from '../trendingcard/Trendingcard'

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
              <Trendingcard/>
              </div>
             <div className='col'>
              <Trendingcard/>
              </div>
             <div className='col'>
              <Trendingcard/>
              </div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Trendingcollection