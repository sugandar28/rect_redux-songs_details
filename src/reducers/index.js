import { combineReducers } from "redux";

const songsReducers = () => {
  return [
    {
      title: "beliver beliver",
      duration: "4:50"
    },
    {
      title: "shape of you",
      duration: "4:00"
    },
    {
      title: "i am so lonenly.",
      duration: "3:20"
    },
    {
      title: "kiss me under eyes",
      duration: "1:50"
    }
  ];
};

const selectedSongReducer = (SelectedSong = null, action) => {
  if (action.type === "SELECTED_SONGS") {
    return action.payload;
  }
  return SelectedSong;
};

export default combineReducers({
  songs: songsReducers,
  selectedSongs: selectedSongReducer
});
