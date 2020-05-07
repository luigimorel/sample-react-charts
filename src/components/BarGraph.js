import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
export default class BarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChartData: {
        labels: [
          "Western Region",
          "Eastern Region",
          "Northern Region",
          "Southern Region",
          "Central Region",
          "Mid-Western Region",
        ],
        datasets: [
          {
            label: "Poverty level by region",
            data: [42434, 63232, 32143, 547578, 64367, 25754, 74213],
            backgroundColor: [
              "rgba(255,45,54,10)",
              "rgba(145,43,65,40)",
              "rgba(54, 65, 143, 12)",
              "rgba(65,34,64,87)",
              "rgba(12,54, 65,2)",
              "rgba(43,32,56,76)",
              "rgba(3, 4,54,3)",
            ],
          },
        ],
      },
    };
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };
  render() {
    return (
      <div>
        <div className="app">
          <Bar
            data={this.state.ChartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Population of major cities in Uganda",
                fontSize: 25,
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
            }}
          />
        </div>
      </div>
    );
  }
}
