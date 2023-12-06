import React, { useEffect, useState } from 'react'

function MusicContent() {

    const [token, setToken] = useState("")

    useEffect(() => {
      if (window.location.hash) {
        const hash = window.location.hash
        let token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
          // console.log(token)
        window.location.hash = ""
        window.localStorage.setItem("token", token.access_token)
        setToken(token.access_token);
        window.history.pushState({}, null, '/music')
      }
  
  }, [])
  return (
    <div>
      {
        token && 
        <div>
          <h1>login page</h1>
        </div>
      }
    </div>
  )
}

export default MusicContent