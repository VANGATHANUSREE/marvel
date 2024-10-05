import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
      <Login /><br/>
      <Signup />
    </>
  )
}

export default App
