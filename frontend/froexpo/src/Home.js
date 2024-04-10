import React from 'react'
import  './Home.css';
const home = () => {
  return (
    <div className='hbody'>
       <button className="hprofile-icon">
        <img src="propic.png" alt="Profile Image"/>
    </button>
    <center><nav>
        <a href="#animals">Animals</a>
        <a href="#birds">Birds</a>
        <a href="#fish">Fish</a>
    </nav></center>
    </div>
  )
}

export default home
