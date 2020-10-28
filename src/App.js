import React, { Fragment, useEffect } from "react";
import { getTokenFromUrl } from "./api/spotify";
import Login from "./components/Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./redux/DataLayer";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });

        console.log(user);
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }

    spotify.getPlaylist(`01Au4XDK1Ky1MoP2PK6j9R`).then((res) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: res,
      });
    });

    spotify.getMyTopArtists().then((res) => {
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: res,
      });
    });

    dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify,
    });
  }, [token, dispatch]);

  return (
    <Fragment>
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </Fragment>
  );
};

export default App;
