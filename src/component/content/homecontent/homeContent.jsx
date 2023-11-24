// import Granim from "granim";
import './homeContent.css';
import HomeImage from "../../../asset/homeImageIlustration.png";

function HomeContent() {
    return(
        <div className="home-bg">
            <div className="home-content">
                <div className="home-content-text">
                    <h1 className="text-title">Having Difficulty Falling Asleep? Stress? Insomnia?</h1>
                    <p className="text-subtitle">Congratulations! You've found the ideal place to sleep and rejuvenate yourself. Glad to be to your ultimate haven for peaceful evenings and delightful dreams!</p>
                    <button className="started-btn">Get Started</button>
                </div>
                <div className="home-content-image">
                    <img className="home-ilustration" src={HomeImage} alt=""/>
                </div>
            </div>
        </div>
    )};

export default HomeContent;