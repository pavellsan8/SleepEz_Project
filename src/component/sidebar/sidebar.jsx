import './sidebar.css';
import React from 'react'
import Playlist from '../playlist/playlist';
import { FaHome, FaSearch, FaList } from "react-icons/fa";

function Sidebar() {
    return (
        <div className="top-links">
            <div className="logo">
                <img className='image-logo'
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="spotify"/>
            </div>
            <ul>
                <li>
                    <FaHome />
                    <span>Home</span>
                </li>
                <li>
                    <FaSearch />
                    <span>Search</span>
                </li>
                <li>
                    <FaList />
                    <span>Your Library</span>
                </li>
            </ul>
        <Playlist />
        </div>
    );
}

export default Sidebar