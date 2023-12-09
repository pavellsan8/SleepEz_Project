import React from 'react'
import { loginEndpoint } from '../../../spotify'
import "./musicLogin.css"
import { FaSpotify } from "react-icons/fa";

function MusicLogin() {
  return (
    <div className="main-body m-auto">
      <div className="title-text">
        <span className="title-text-1">Sleep</span>        
        <span className="title-text-2">Ez</span>        
        <span className="title-text-3"> X </span>        
        <span className="title-text-4">Spotify<FaSpotify /></span>        
      </div>
      <div className="subtitle-text m-2">
        <span className="subtitle-text-1">We want connected you with your own playlist to help your getting better sleep.</span>
      </div>
      <a href={loginEndpoint}>
        <button className="login-button m-3">Login Now</button>
      </a>
    </div>
  )
}

export default MusicLogin