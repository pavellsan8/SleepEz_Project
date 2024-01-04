import React from "react";
import "./sidebarVideo.css";
import { FaHome, FaSearch, FaList, FaRegHeart } from "react-icons/fa";

function SidebarVideo() {
  return (
    <div className="sidebar-video">
      <p className="title-text-video">Playlist Videos</p>
      <ul className="list-icon-container">
        <li className="list-item-video">
          <span className="list-icon-video">
            <FaHome />
          </span>
          <span> Home</span>
        </li>
        <li className="list-item">
          <span className="list-icon">
            <FaSearch />
          </span>
          <span> Search</span>
        </li>
        <li className="list-item">
          <span className="list-icon">
            <FaRegHeart />
          </span>
          <span> Favourites</span>
        </li>
      </ul>
    </div>
  );
}

export default SidebarVideo;
