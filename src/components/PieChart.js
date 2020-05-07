import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChartData: {
        labels: ["Luigi Morel", "Joseph ", "William ", "Ann", "Joseph"],

        datasets: [
          {
            label: "The amount of money possessed by anyone",
            data: [23, 11, 43, 33, 98],
            backgroundColor: [
              "#223122",
              "#324534",
              "#435656",
              "#325443",
              "#324355",
            ],
          },
        ],
      },
    };
  }

  //   static defaultProps = {
  //     // legendPosition: "bottom",
  //     displayLegend: true,
  //     displayTitle: true,
  //   };
  render() {
    return (
      <div className="graph">
        <Pie
          data={this.state.ChartData}
          options={{
            title: {
              text: "Amount of money prepared by individuals in a family",
              displayTitle: true,
              fontSize: 16,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </div>
    );
  }
}

export default PieChart;
