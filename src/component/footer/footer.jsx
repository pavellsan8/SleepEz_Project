import React from 'react';
import './footer.css';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaRegEnvelope, FaPaperPlane} from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <div className="titleFooter">
                            <span className='title01'>Sleep</span>
                            <span className='title02'>Ez</span>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                        <div className="footer-icons">
                            <i class="facebook"><FaFacebookF/></i>
                            <i class="twitter"><FaTwitter/></i>
                            <i class="instagram"><FaInstagram/></i>
                            <i class="linkedin"><FaLinkedinIn/></i>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-2">
                        <h5>Services</h5>
                        <ul>1
                            <li className="nav-item">
                                <a className="" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="" href="/">Tips</a>
                            </li>
                            <li className="nav-item">
                                <a className="" href="/">Music</a>
                            </li>
                            <li className="nav-item">
                                <a className="" href="/">Videos</a>
                            </li>
                            <li className="nav-item">
                                <a className="" href="/">About Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 ft-3">
                        <h5>Contact Us</h5>
                        <p><i class="phone"><FaPhoneAlt/></i> +62 217359083</p>
                        <p><i class="envelope"><FaRegEnvelope/></i> sleepez@mail.com</p>
                        <p><i class="paper-plane"><FaPaperPlane/></i> Jakarta, Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;