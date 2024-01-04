import React from 'react';
import './videosContent.css';
import SidebarVideo from '../../sidebar/sidebarVideo';
import VideosGallery from '../../videosgallery/videosgallery';

function VideosContent() {
  return (
    <div className='videos-gallery-page'>
      <SidebarVideo/>
      <VideosGallery/>
    </div>
  )
}

export default VideosContent