import React, { useEffect, useState } from 'react'

function MusicContent() {

    const [token, setToken] = useState("")

    useEffect(() => {
      const hash = window.location.hash
      console.log(hash)
      let token = window.localStorage.getItem("token", token)
  
      // getToken()
  
      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
          // console.log(token)
          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }
  
      setToken(token)
  
  }, [])
  return (
    <div>
        
    </div>
  )
}

export default MusicContent