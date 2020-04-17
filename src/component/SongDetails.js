import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  if (!song) {
    return <div>Selcect a song</div>;
  }

  return (
    <div>
      <h3>Details for :</h3>
      <p>
        Title:{song.title}
        <br />
        Duration:{song.duration}
      </p>
    </div>
  );
};

const mapToStateProps = state => {
  return { song: state.selectedSongs };
};

export default connect(mapToStateProps)(SongDetails);
