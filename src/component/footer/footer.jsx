import React from 'react';
import './footer.css';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaRegEnvelope, FaPaperPlane} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <div className="titleFooter">
                                <span className='title01'>Sleep</span>
                                <span className='title02'>Ez</span>
                            </div>
                        </Link>
                        <p>Your premier destination for sleep challenges and enhancing the quality of your rest and find yourself battling stress at bedtime the presence of SleepEz is here to provide expert advice and practical tips to help you achieve a more peaceful night's sleep.</p>
                        <div className="footer-icons">
                            <i class="facebook"><FaFacebookF/></i>
                            <i class="twitter"><FaTwitter/></i>
                            <i class="instagram"><FaInstagram/></i>
                            <i class="linkedin"><FaLinkedinIn/></i>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-2">
                        <h5 className="title-footer">Services</h5>
                        <ul>
                            <li className="nav-item">
                                <Link to="/home" style={{textDecoration: 'none'}}>
                                    <a className="" href="/">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="" href="/">Tips</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/musiclogin" style={{textDecoration: 'none'}}>
                                    <a className="" href="/">Music</a>
                                </Link>
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
                        <h5 className="title-footer">Contact Us</h5>
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