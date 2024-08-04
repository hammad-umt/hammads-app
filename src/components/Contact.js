import React from 'react'
import Navbar from './Navbar'
export default function Contact() {
  return (
    <>
    <Navbar title='Hammads App'/>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Feedback Here</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    </>
  )
}
