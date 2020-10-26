export const authEndoint = `https://accounts.spotify.com/en/authorize`;
export const redirectUri = `http://localhost:3000/`;

const clientId = "598a53813f554aff8a7191da0effc1e1";

const scopes = [
  "use-read-currently-playing",
  "use-read-recently-played",
  "use-read-playback-state",
  "use-top-read",
  "use-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
