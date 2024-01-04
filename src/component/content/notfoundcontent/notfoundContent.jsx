import React from 'react'
import './notfoundContent.css'
import { Link } from 'react-router-dom';

function NotfoundContent() {
  return (
    <div className='notfound-div'>
        <div className='error-title'>
          <span className='blue-text'>4</span>
          <span className='darkblue-text'>0</span>
          <span className='blue-text'>4</span>
        </div>
        <div className='error-subtitle'>
          <p className='subtitle-text'>Hmm looks like you need some sleep here.</p>
        </div>
        <Link to="/" style={{textDecoration:'none'}}>
          <button className='back-home-btn'>Back to Home</button>
        </Link>
    </div>
  )
}

export default NotfoundContent