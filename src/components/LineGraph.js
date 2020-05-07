import React, { Component } from "react";
import { Line } from "react-chartjs-2";

//
export default class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChartData: {
        labels: [
          "Truck Drivers",
          "Community",
          "Ugandan Nationals ",
          "Tourists",
        ],
        datasets: [
          {
            data: [20, 26, 48, 12],
            label: "COVID-19 patients",
            backgroundColor: [
              "rgba(45,53,255,.9)",
              "rgba(145,65,43,.40)",
              "rgba(32, 143, 54, .12)",
              //   "rgba(34,65,87,.87)",
              //   "rgba(21,64, 54,.2)",
            ],
          },
        ],
      },
    };
  }
  static defaultProps = {
    displayLegend: true,
    legendPosition: "bottom",
    displayTitle: true,
  };
  render() {
    return (
      <div>
        <div className="graph">
          <Line
            data={this.state.ChartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "COVID19 infections per group of people",
                fontSize: 25,
                color: "white",
              },
              legend: {
                position: this.props.legendPosition,
                displayLegend: this.props.displayLegend,
              },
            }}
          />
        </div>
      </div>
    );
  }
}
