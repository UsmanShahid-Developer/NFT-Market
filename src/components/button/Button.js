import React from 'react'
import "./Button.css"
import img2 from "../../assets/User.png"
export default function Button() {
  return (
    <button className='text-white btn  signupbtn'>
        <img src={img2} className='imgstyle' />
        
        Sign Up</button>
  )
}
