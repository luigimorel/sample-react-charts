import React from "react";
// import Chart from "./Chart";
import BarGraph from "./components/BarGraph";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="container">
        <BarGraph legendPosition="top" />
      </div>

      {/* <Chart legendPosition="bottom" /> */}
    </div>
  );
}

export default App;
