import React from 'react'
import { loginEndpoint } from '../../../spotify'
import "./musicLogin.css"

function MusicLogin() {
  return (
    <div className="main-body m-auto">
      MusicContent
      <a href={loginEndpoint}>
        <button className='p-5'>loginn</button>
      </a>
    </div>
  )
}

export default MusicLogin