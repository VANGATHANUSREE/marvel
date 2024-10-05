import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div>
      <h3>Signup Form</h3>
    <div className='container'>
    <form className="form">
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control"/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" className="form-control"/>
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" className="form-control"/>
      </div>
      <button type="submit" className="btn btn-primary">Signup</button>
    </form>
    </div>
    </div>
  )
}
export default Signup

