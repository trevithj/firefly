import React from "react";
import { useStore } from "./store";
import logo from "./assets/ff_logo.svg";

const appStyle = {
  fontFamily: "Open Sans",
  margin: 0,
  padding: 0
};

const appLogo = {
  width: "5vw"
};

const App = () => {
  const [state] = useStore();

  console.log(state);

  return (
    <div className="App container" style={appStyle}>
      <div className="row">
        <div className="col-sm-2">
          <div>
            <img src={logo} style={appLogo} alt="logo" />
            TODO: add left panel
          </div>
        </div>
        <div className="col-sm-10">
          <div>TODO: add main panel</div>
        </div>
      </div>
    </div>
  );
};

export default App;
