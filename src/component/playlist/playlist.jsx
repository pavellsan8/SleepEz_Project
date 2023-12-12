import './playlist.css';
import axios from "axios";
import React, { useEffect } from "react";
import { reducerCases } from '../../utils/constant.jsx';
import { useStateProvider } from '../../utils/StateSupports.jsx';

function Playlist() {
    const [{ token, playlists }, dispatch] = useStateProvider();
    const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

    useEffect(() => {
        const getPlaylistData = async () => {
            try {
                const response = await axios.get(PLAYLIST_ENDPOINT , {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                });

                const { items } = response.data;
                const playlists = items.map(({ name, id }) => {
                    return { name, id };
                });
                //console.log("API Response:", response.data);
                dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
                //console.log("Playlists:", playlists);
                console.log("API Response:", response.data);
            } catch (error) {
                console.log("Error response fetching playlists:", error.response);
            }
        };
        if (token) {
            getPlaylistData(PLAYLIST_ENDPOINT, playlists);
        }
    }, [token, dispatch]);

    const changeCurrentPlaylist = (selectedPlaylistId) => {
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
    };

    return (
        <div className='user-playlist'>
            <ul>
                {playlists.map(({ name, id }) => {
                    return (
                        <li key={id} onClick={() => changeCurrentPlaylist(id)}>
                            {name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Playlist;
