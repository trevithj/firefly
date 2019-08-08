import React from "react";

const FoodView = props => {
  return props.view !== "food" ? null : (
    <div className="panel panel-default">
      <div className="panel-heading">TODO: FoodView</div>
    </div>
  );
};

export default FoodView;
