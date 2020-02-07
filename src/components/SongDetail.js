import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  return song ? (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {`${song.song.title}`} <br />
        Duration: {`${song.song.duration}`}
      </p>
    </div>
  ) : (
    <div>Select a song.</div>
  );
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
