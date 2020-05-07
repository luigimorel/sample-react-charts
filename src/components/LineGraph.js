import React, { Component } from "react";
import { Line } from "react-chartjs-2";

//
export default class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Truck Drivers", "Comm", "Ugandan Nationals ", "Tourists"],
        datasets: [20, 26, 48, 12],
        backgroundColor: [
          "rgba(45,53,255,.9)",
          "rgba(145,65,43,.40)",
          "rgba(32, 143, 54, .12)",
          "rgba(34,65,87,.87)",
          "rgba(21,64, 54,.2)",
          "rgba(32,43,76,0.6)",
          "rgba(3, 4,54,3)",
        ],
      },
    };
  }
  static defaultProps = {
    displayLegend: true,
    legendPosition: "right",
    displayTitle: true,
  };
  render() {
    return (
      <div className="graph">
        <Line data={this.state.chartData} />
        options =
        {{
          title: {
            display: this.props.displayTitle,
            text: "COVID19 infections per group of people",
            fontSize: 25,
            fontColor: "rgba(255,43,43,.09)",
          },
          legend: {
            position: this.props.legendPosition,
            displayLegend: this.props.displayLegend,
          },
        }}
      </div>
    );
  }
}
