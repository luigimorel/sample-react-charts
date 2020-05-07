import React from "react";
import BarGraph from "./components/BarGraph";
import LineGraph from "./components/LineGraph";

import PieChart from "./components/PieChart";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="container">
        <BarGraph legendPosition="right" />

        <LineGraph legendPosition="bottom" />
      </div>

      <div className="container">
        <PieChart />
      </div>
    </div>
  );
}

export default App;
