import React from 'react'
import NavbarDefault from '../../component/navbar/navbar'
import Footer from '../../component/footer/footer'
import MusicLogin from '../../component/content/musiccontent/musicLogin'

function MusicLoginPage() {
  return (
    <div>
        <NavbarDefault/>
        <MusicLogin/>
        <Footer/>
    </div>
  )
}

export default MusicLoginPage