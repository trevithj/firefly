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

const Button = ({ active = false, title }) => {
  const theClass = active ? `${btnClass} active` : btnClass;
  return (
    <button type="button" className={theClass}>
      {title}
    </button>
  );
};

const LeftPanel = () => {
  const [state] = useStore();

  console.log(state);

  return (
    <div>
      <Row style={{ height: 30 }}>
        <img src={logo} style={appLogo} alt="logo" />
        <span style={{ marginTop: 4, fontWeight: 600 }}>DataDashboard</span>
      </Row>
      <Row>
        <div className="btn-group-vertical" style={{ width: "100%" }}>
          <Button title="Overview" active />
          <Button title="Animals" />
          <Button title="Food" />
          <Button title="Music" />
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
