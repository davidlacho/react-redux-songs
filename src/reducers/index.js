import { combineReducers } from "redux";

// Overkill to put this here
export const songsReducer = () => [
  {
    title: "Title 1",
    artist: "Artist 1",
    duration: "4:05"
  },
  {
    title: "Title 2",
    artist: "Artist 2",
    duration: "1:02"
  },
  {
    title: "Title 3",
    artist: "Artist 3",
    duration: "3:04"
  },
  {
    title: "Title 4",
    artist: "Artist 4",
    duration: "9:10"
  }
];

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
