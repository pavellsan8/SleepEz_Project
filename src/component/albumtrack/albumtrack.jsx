import './albumtrack.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateProvider } from '../../utils/StateSupports.jsx';

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
            const tracksData =  response.data.items.map(item => ({
              name: item.track.name,
              image: item.track.album.images[0].url,
            //   artists: item.track.artist[0].map(artist => artist.name).join(','),
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
      <div className="user-track-container">
        {tracks.map(({ name, image }, index) => (
            <div className='user-tracks m-2'
            key={index}>
                <img className='song-image' src={image} alt={name} style={{ width: '25vh', height: '25vh'}} />
                <p className='song-title'>{name}</p>
                {/* //<p>{artists}</p> */}
            </div>
        ))}
      </div>
    );
}
export default AlbumTrack