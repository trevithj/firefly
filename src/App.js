import React from "react";
import LeftPanel from "./leftPanel";
import MainPanel from "./mainPanel";
import { Col, Row } from "./styled";

const appStyle = {
  fontFamily: "Open Sans",
  margin: 0,
  padding: 0,
  width: "100%"
};

const App = () => {
  return (
    <div className="container" style={appStyle}>
      <Row style={{ width: "100%" }}>
        <Col width="3">
          <LeftPanel />
        </Col>
        <Col width="9">
          <MainPanel />
        </Col>
      </Row>
    </div>
  );
};

export default App;
