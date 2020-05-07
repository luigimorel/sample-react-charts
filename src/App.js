import React from "react";
import BarGraph from "./components/BarGraph";
import LineGraph from "./components/LineGraph";
import BarGraphAgain from "./components/BarGraphAgain";
import PieChart from "./components/PieChart";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="container">
        <BarGraph legendPosition="bottom" />

        <LineGraph legendPosition="bottom" />
      </div>
      <div className="separator"></div>
      <div className="container">
        <PieChart legendPosition="bottom" />
        <BarGraphAgain />
      </div>
    </div>
  );
}

export default App;
