import React, { useState, createRef } from 'react';
import './videosgallery.css';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import img1 from '../../asset/videos/tumbnail1.jpg';
import v1 from '../../asset/videos/video1.mp4';
import img2 from '../../asset/videos/tumbnail2.jpg';
import v2 from '../../asset/videos/video2.mp4';
import img3 from '../../asset/videos/tumbnail3.jpg';
import v3 from '../../asset/videos/video3.mp4';

function VideosGallery() {

    const [model, setModel] = useState(false);
    let data = [
        {
            id: 1,
            tumbnail: img1,
            videoUri: v1,
            title: 'Ini video pertama yang berisi tentang lagu buat meditasi anda jadi pasti bisa tidur',
        },
        {
            id: 2,
            tumbnail: img2,
            videoUri: v2,
            title: 'You will sleep to this ASMR at exactly 5:50',
        },
        {
            id: 3,
            tumbnail: img3,
            videoUri: v3,
            title: 'Oddly Satisfying & ASMR Video That Relaxes You Before Sleep | All Original Satisfying Videos',
        }
    ];

  return (
    <div className='videos-div'>
        {data.map((item, index) => {
            let divRef = createRef(null)
            const openModel = () => {
                divRef.current.classList.remove('video')
                divRef.current.classList.add('model')
                setModel(true)
            }
            const closeModel = () => {
                divRef.current.classList.add('model')
                divRef.current.classList.remove('video')
                setModel(false) 
            }

            return (
                <div ref={divRef} className='videos-container' key={index}>
                    <div className='videos-item'>
                        <Video
                            style={{width: '100%'}}
                            autoPlay={model}
                            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                            poster={item.poster}>
                                <source src={item.videoUri} type='video/webm'/>
                        </Video>
                    </div>
                    <p className='videos-title-text'>{item.title}</p>
                </div>
            )
        })}
    </div>
  )
}

export default VideosGallery