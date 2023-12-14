import './albumtrack.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateProvider } from '../../utils/StateSupports.jsx';
import { reducerCases } from "../../utils/constant.jsx";

function AlbumTrack() {
    const [{ token }, dispatch] = useStateProvider();
    const TRACK_ENDPOINT = "https://api.spotify.com/v1/playlists/3wdAo1Yvzss32Eue9GSilt/tracks";
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
            const tracksData = response.data.items.tracks
           
            console.log(tracksData);
            setTracks([{ name: tracksData.name }]);
        
          } catch (err) {
            console.error(`Error fetching playlist data: ${err}`);
          }
        };
  
        getTrackData();
      }
    }, [token, dispatch]);
  
    const changeCurrentPlaylist = (selectedPlaylistId) => {
      dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
    };
  
    return (
      <div className="user-playlist-container pt-5">
        <ul className="user-playlist">
          {tracks.map(({ name, id }) => (
            <li 
              className="all-playlists"
              key={id} 
              onClick={() => changeCurrentPlaylist(id)}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default AlbumTrack