import React from "react";
import { useStore } from "../store";

const MainPanel = () => {
  const [state] = useStore();

  console.log(state);

  return <div>TODO: add main panel</div>;
};

export default MainPanel;
