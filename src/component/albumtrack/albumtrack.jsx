import './albumtrack.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateProvider } from '../../utils/StateSupports.jsx';
import { FaPlayCircle } from "react-icons/fa";

function AlbumTrack() {
    const [{ token }, dispatch] = useStateProvider();
    const TRACK_ENDPOINT = "https://api.spotify.com/v1/playlists/37i9dQZF1DX3ZeFHRhhi7Y/tracks";
    const [tracks, setTracks] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
  
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
              id: item.track.id,
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

    const playSong = (id) => {
      const selectedSong = tracks.find(song => song.id === id);
      setCurrentSong(selectedSong);
      // audioPlayer.src = `https://open.spotify.com/track/${id}`;
      // audioPlayer.play();
      window.open(`https://open.spotify.com/track/${id}`);
  };

  
    return (
      <div className="user-track-container">
        {tracks.map(({ id, name, image }) => (
            <div className='user-tracks m-2'
            key={id}>
                <img className='song-image' src={image} alt={name} />
                <p className='song-title'>{name}</p>
                <button className='play-btn' onClick={() => playSong(id)}>
                  <FaPlayCircle className='play-btn-icon'/>
                </button>
            </div>
        ))}
      </div>
    );
}
export default AlbumTrack