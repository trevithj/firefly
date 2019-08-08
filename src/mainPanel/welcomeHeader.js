import React from "react";
import { Row } from "../styled";

const WelcomeHeader = props => {
  const { hide = false, handleDisagree, handleAgree } = props;
  return hide ? null : (
    <div className="panel panel-info" style={{ border: "solid thin silver" }}>
      <div className="panel-heading">
        <Row justify="center">Welcome</Row>
        <Row justify="center">
          <div className="text-center">
            Before you get too carried away, do you agree to us collecting
            anonimized statistics about your use of our app?
          </div>
        </Row>
        <Row justify="center">
          <button className="btn btn-default" onClick={handleDisagree}>
            <i className="material-icons">clear</i> disagree
          </button>
          <button className="btn btn-primary" onClick={handleAgree}>
            <i className="material-icons">done</i> agree
          </button>
        </Row>
      </div>
    </div>
  );
};

export default WelcomeHeader;
