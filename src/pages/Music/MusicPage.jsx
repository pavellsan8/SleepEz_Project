import React from 'react'
import NavbarDefault from '../../component/navbar/navbar'
import Footer from '../../component/footer/footer'
import MusicContent from '../../component/content/musiccontent/musicContent'

function MusicMainPage() {
  return (
    <div>
        <NavbarDefault/>
        <MusicContent/>
        <Footer/>
    </div>
  )
}

export default MusicMainPage