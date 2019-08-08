import React from "react";

const MusicView = props => {
  return props.view !== "music" ? null : (
    <div className="panel panel-default">
      <div className="panel-heading">TODO: MusicView</div>
    </div>
  );
};

export default MusicView;
