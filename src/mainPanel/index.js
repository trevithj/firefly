import React from "react";
import { useStore } from "../store";
import WelcomeHeader from "./welcomeHeader";
// import { Row } from "../styled";

const panelStyle = {
  height: "100vh",
  backgroundColor: "#eee"
};
const OverView = props => {
  return props.view !== "overview" ? null : (
    <div className="panel panel-default" style={panelStyle}>
      <div className="panel-heading">TODO: OverView</div>
      <div className="panel-body">
        <div>TODO: info circles</div>
        <div>TODO: Top music header</div>
        <div>TODO: Top music panel</div>
      </div>
    </div>
  );
};
const AnimalsView = props => {
  return props.view !== "animals" ? null : (
    <div className="panel panel-default">
      <div className="panel-heading">TODO: AnimalsView</div>
    </div>
  );
};
const FoodView = props => {
  return props.view !== "food" ? null : (
    <div className="panel panel-default">
      <div className="panel-heading">TODO: FoodView</div>
    </div>
  );
};
const MusicView = props => {
  return props.view !== "music" ? null : (
    <div className="panel panel-default">
      <div className="panel-heading">TODO: MusicView</div>
    </div>
  );
};

const MainPanel = () => {
  const [state, dispatch] = useStore();

  const getHandle = val => () => {
    dispatch({ agree: val });
  };
  // console.log(state);

  return (
    <div
      className="panel-group"
      style={{ width: "100%", border: "solid thin blue" }}
    >
      <WelcomeHeader
        hide={state.agree !== "none"}
        handleAgree={getHandle("yes")}
        handleDisagree={getHandle("no")}
      />
      <OverView view={state.view} />
      <AnimalsView view={state.view} />
      <FoodView view={state.view} />
      <MusicView view={state.view} />
    </div>
  );
};

export default MainPanel;
