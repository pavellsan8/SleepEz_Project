import "./playlist.css";
import axios from "axios";
import React, { useEffect } from "react";
import { reducerCases } from "../../utils/constant.jsx";
import { useStateProvider } from "../../utils/StateSupports.jsx";
import { useState } from "react";
import { cliendId } from "../../spotify.jsx";

function Playlist() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  const PLAYLIST_ENDPOINT =
    "https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n";
  const [responseData, setResponse] = useState("no data");
  const storedToken = localStorage.getItem("token");

  useEffect(() => {
    const getPlaylistData = async () => {
      setResponse(
        await axios
          .get(PLAYLIST_ENDPOINT,{
            headers: {
              Authorization: "Bearer " + storedToken,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
              'Client-ID': cliendId,
            },
          })
          .then(function (res) {
            console.log(`reponse: ${res}`);
          })
          .catch(function (err) {
            console.log(`error: ${err}`);
          })
      );

      // console.log(`response : ${responseData}`);

      // const { items } = responseData.data;
      // console.log(`data item dari playlits: ${items}`);
      // const playlists = items.map(({ name, id }) => {
      //   return { name, id };
      // });
      //console.log("API Response:", response.data);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };

    if (storedToken) {
      getPlaylistData(PLAYLIST_ENDPOINT, playlists);
      console.log(token);
    }
  }, [token, dispatch, playlists, responseData, storedToken]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };

  return (
    <div className="user-playlist">
      <ul>
        {playlists.map(({ name, id }) => {
          return (
            <li
              key={id}
              style={{ color: "white" }}
              onClick={() => changeCurrentPlaylist(id)}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Playlist;
