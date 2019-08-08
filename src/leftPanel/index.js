//Left Menu
import React from "react";
import { useStore } from "../store";
import logo from "../assets/ff_logo.svg";
import { Row } from "../styled";

const appLogo = {
  width: "1.5em",
  marginRight: 6
};

const btnClass = "btn btn-primary text-left";

const Button = ({ active = false, title, handleClick }) => {
  const theClass = active ? `${btnClass} active` : btnClass;
  return (
    <button type="button" className={theClass} onClick={handleClick}>
      {title}
    </button>
  );
};

const LeftPanel = () => {
  const [state, dispatch] = useStore();
  const getHandler = view => () => dispatch({ view });
  // console.log(state);

  return (
    <div>
      <Row style={{ height: 30 }}>
        <img src={logo} style={appLogo} alt="logo" />
        <span style={{ marginTop: 4, fontWeight: 600 }}>DataDashboard</span>
      </Row>
      <Row>
        <div className="btn-group-vertical" style={{ width: "100%" }}>
          <Button
            title="Overview"
            active={state.view === "overview"}
            handleClick={getHandler("overview")}
          />
          <Button
            title="Animals"
            active={state.view === "animals"}
            handleClick={getHandler("animals")}
          />
          <Button
            title="Food"
            active={state.view === "food"}
            handleClick={getHandler("food")}
          />
          <Button
            title="Music"
            active={state.view === "music"}
            handleClick={getHandler("music")}
          />
        </div>
      </Row>
      <hr />
      <Row>
        <div className="btn-group-vertical" style={{ width: "100%" }}>
          <Button title="Settings" />
          <Button title="Logout" />
        </div>
      </Row>
      <Row justify="center">
        <div style={{ fontSize: 10 }}>&copy; Firefly 2019</div>
      </Row>
    </div>
  );
};

export default LeftPanel;
