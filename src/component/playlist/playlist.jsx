import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateProvider } from "../../utils/StateSupports.jsx";
import { reducerCases } from "../../utils/constant.jsx";
import "./playlist.css";

function Playlist() {
  const [{ token }, dispatch] = useStateProvider();
  const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/playlists/3wdAo1Yvzss32Eue9GSilt";
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (token) {
      const getPlaylistData = async () => {
        try {
          const response = await axios.get(PLAYLIST_ENDPOINT, {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            },
          });
          const playlistsData = response.data
         
          console.log(playlistsData);
          setPlaylists([{ name: playlistsData.name }]);
      
        } catch (err) {
          console.error(`Error fetching playlist data: ${err}`);
        }
      };

      getPlaylistData();
    }
  }, [token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };

  return (
    <div className="user-playlist-container">
      <ul className="user-playlist">
        {playlists.map(({ name, id }) => (
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

export default Playlist;