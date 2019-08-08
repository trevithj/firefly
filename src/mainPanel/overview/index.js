import React from "react";

const infoStyle = {
  display: "inline-block",
  width: "25%",
  margin: "0 2%",
  height: "20vh",
  backgroundColor: "silver"
};

const InfoCircle = props => (
  <div style={infoStyle}>
    <div>{props.count}</div>
    <div>{props.recent} last 30 days</div>
    <div>{props.label}</div>
  </div>
);

const panelStyle = {
  height: "100vh",
  backgroundColor: "#eee"
};

const OverView = props => {
  const { view, animals, music, food } = props;
  return view !== "overview" ? null : (
    <div className="panel panel-default" style={panelStyle}>
      <div className="panel-body">
        <h4>Overview</h4>
        <div>
          <InfoCircle
            count={animals.catVids}
            recent={animals.recent}
            label="Cat videos watched"
          />
          <InfoCircle
            count={food.pizzaSlices}
            recent={food.recent}
            label="Slices of pizza in the fridge"
          />
          <InfoCircle
            count={music.favSongs}
            recent={music.recent}
            label="Favourite songs beginning with letter 'A'"
          />
        </div>
        <h4>Top Music</h4>
        <div>TODO: Top music panel</div>
      </div>
    </div>
  );
};
export default OverView;
