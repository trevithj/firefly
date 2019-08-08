import React from "react";
import { useStore } from "../store";
import WelcomeHeader from "./welcomeHeader";
import OverView from "./overview";
import AnimalsView from "./animals";
import FoodView from "./food";
import MusicView from "./music";

const MainPanel = () => {
  const [state, dispatch] = useStore();

  const getHandle = val => () => {
    dispatch({ agree: val });
  };
  console.log(state);

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
      <OverView {...state} />
      <AnimalsView view={state.view} />
      <FoodView view={state.view} />
      <MusicView view={state.view} />
    </div>
  );
};

export default MainPanel;
