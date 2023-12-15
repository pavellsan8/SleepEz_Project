import React from 'react'
import './aboutusContent.css'
import imageAu from '../../../asset/aboutus-img.png'
import imageAu2 from '../../../asset/aboutus-img-2.png'
import imageAu3 from '../../../asset/Lembaga.png'

function AboutusContent() {
  return (
    <>
    <div className='main-div-1'>
      <div className='aboutus-content'>
        <div className='title-text-aboutus'>
          <h1 className='title-texts'>BEFORE YOU SLEEP LET’S GET TO KNOW EACH OTHER</h1>
        </div>
        <div className='img-text-content'>
          <div className='image-aboutus'>
            <img className='image-setting' src={imageAu} alt="" />
          </div>
          <div className='text-aboutus'>
            <h2 className='title-text-setting'>WHO ARE WE?</h2>
            <hr />
            <p className='subtitle-text-setting'>We are a dedicated company focused on understanding and addressing the challenges you face in achieving a comfortable night's sleep. We know that quality sleep is a crucial aspect of maintaining physical and mental health, and we are ready to assist you in achieving better sleep.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className='main-div-2'>
      <div className='aboutus-content'>
        <div className='title-text-aboutus'>
          <h1 className='title-texts'>WE SURElY TO MAKE YOU COULD SLEEP EASILY & SOUNDLY</h1>
        </div>
        <div className='img-text-content-2'>
          <div className='text-aboutus-2'>
            <h2 className='title-text-setting'>WHY WE DO & WHAT WE DO?</h2>
            <hr />
            <p className='subtitle-text-setting'>At SleepEz, we understand that each individual has different sleep needs. With an approach tailored to you, we aim to help you achieve comfortable and meaningful sleep. It offers a range of services and products(Content) aimed at improving the quality of sleep for its customers.</p>
          </div>
          <div className='image-aboutus'>
            <img className='image-setting' src={imageAu2} alt="" />
          </div>
        </div>
      </div>
    </div>

    <div className='main-div-3'>
      <div className='text-container'>
        <p className='quotes-text'>
          "In the symphony of life, a good night's sleep is the perfect harmony. Let Us create the ideal sleep experience for you."
        </p>
      </div>
      <hr className='breaking-line' />
      <div className='supported-text-container'>
        <p className='supported-by'>
          WE ARE SUPPORTED BY
        </p>
      </div>
      <div className='image-lembaga'>
        <img className='supported-image' src={imageAu3} alt="" />
      </div>
    </div>
    </>
  )
}

export default AboutusContent