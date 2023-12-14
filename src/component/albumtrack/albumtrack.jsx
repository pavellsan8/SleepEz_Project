import './albumtrack.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateProvider } from '../../utils/StateSupports.jsx';
import { reducerCases } from "../../utils/constant.jsx";

function AlbumTrack() {
    const [{ token }, dispatch] = useStateProvider();
    const TRACK_ENDPOINT = "https://api.spotify.com/v1/playlists/37i9dQZF1DX3ZeFHRhhi7Y/tracks";
    const [tracks, setTracks] = useState([]);
  
    useEffect(() => {
      if (token) {
        const getTrackData = async () => {
          try {
            const response = await axios.get(TRACK_ENDPOINT, {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
              },
            });
            const tracksData =  response.data.items.map(item => ({
              name: item.track.name,
              image: item.track.album.images[0].url,
            }));
           
            console.log(tracksData);
            setTracks(tracksData);
        
          } catch (err) {
            console.error(`Error fetching playlist data: ${err}`);
          }
        };
  
        getTrackData();

      }
    }, [token, dispatch]);
  
    return (
      <div className="user-playlist-container pt-5">
        <ul className="user-playlist">
        {tracks.map(({ name, image }, index) => (
          <li 
          key={index} >
            <img 
            src={image} 
            alt={name} 
            style={{ width: '200px', height: '200px', marginRight: '10px'}} />
            {name}
          </li>
        ))}
        </ul>
      </div>
    );
}
export default AlbumTrack