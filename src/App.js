import React from "react";
import BarGraph from "./components/BarGraph";
import LineGraph from "./components/LineGraph";
import DoughnutGraph from "./components/DoughnutGraph";
import PieChart from "./components/PieChart";
import HorizontalBarr from "./components/HorizontalBar";
import Radar from "./components/Radar";

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
        <DoughnutGraph />
      </div>
      <div className="separator"></div>
      <div class="container">
        <HorizontalBarr />
        <Radar />
      </div>
    </div>
  );
}

export default App;
