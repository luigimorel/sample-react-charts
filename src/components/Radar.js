import React, { Component } from "react";
import { Radar } from "react-chartjs-2";
export default class RadarGraph extends Component {
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
    legendPosition: "bottom",
  };
  render() {
    return (
      <div className="graph">
        <div className="app">
          <Radar
            data={this.state.RadarartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text:
                  "Poverty levels by region in Uganda by number of people per region",
                fontSize: 16,
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
