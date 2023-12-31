import './homeContent.css';
import HomeImage from "../../../asset/homeImageIlustration.png";
//import { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function HomeContent() {

    const sleepText = ['Asleep', 'Stress', 'Insomnia']

    const [text] = useTypewriter({
        words: sleepText, 
        loop: {},
        typeSpeed: 125,
        deleteSpeed: 100
    });

    return(
        <div className="home-bg">
            <div className="home-content">
                <div className="home-content-text">
                    <h1 className="text-title">Having Difficulty Falling
                        <span> {text}?</span>
                        <span style={{color: 'white'}}><Cursor cursorStyle='|'/></span>
                    </h1>
                    <p className="text-subtitle">Congratulations! You've found the ideal place to sleep and rejuvenate yourself. Glad to be to your ultimate heaven for peaceful evenings and delightful dreams!</p>
                    <button className="started-btn">Get Started</button>
                </div>
                <div className="home-content-image">
                    <img className="home-ilustration" src={HomeImage} alt=""/>
                </div>
            </div>
        </div>
    )};

export default HomeContent;