import React from "react";
import Card from "./Card";
import "../Styles/recommendations.scss";

function Recommendations() {
  return <>
    <div className="recomm">
    <Card className="card" />
    <Card className="card" />
    <Card className="card" />
    <Card className="card" />
    <Card className="card" />
    </div>
  </>;
}

export default Recommendations;
