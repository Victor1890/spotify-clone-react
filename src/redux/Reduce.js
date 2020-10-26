export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQBG6diwlEVxQD2lO2VURgdPFdlNYIFVuuJT1pIV1_DT_1HqHnF1_Wth8AdcCJ2d4BW6xS-ThbQEcUmsidDI1KWFw9pl1BL64fFReEeMel6lXTFaduZnKFc7tmsTuUphKpFKRUIiMv0UWuN2H0drQXwyyRIZp2w",
};

const reduce = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reduce;
