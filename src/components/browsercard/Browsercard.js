import React from 'react'
import "./Browsercard.css"
function Browsercard(props) {
  return (
    <div>
        <div class="card roundbrowse" >
  <img src={props.image2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 class="card-text text-white ">
    {props.name}
    </h2>
  </div>
</div>
    </div>
  )
}

export default Browsercard