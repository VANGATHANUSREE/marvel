import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
    <h3>Login Form</h3>
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
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
    </div>
  )
}
export default Login


