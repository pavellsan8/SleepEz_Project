import React from 'react';
import VideosContent from '../../component/content/videoscontent/videoscontent';
import NavbarDefault from '../../component/navbar/navbar';
import Footer from '../../component/footer/footer';

function VideoPage() {
  return (
    <div>
        <NavbarDefault/>
        <VideosContent/>
        <Footer/>
    </div>
  )
}

export default VideoPage