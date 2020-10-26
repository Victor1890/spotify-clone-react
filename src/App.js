import { useEffect } from "react";
import { getTokenFromUrl } from "./api/spotify";
import Login from "./components/Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./redux/DataLayer";
import "./styles/App.css";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
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

    console.log(user);
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;
