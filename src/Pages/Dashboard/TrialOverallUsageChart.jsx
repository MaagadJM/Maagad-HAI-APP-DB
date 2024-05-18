import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./dashboard.css";

import OverallUsageData from "./data/OverallUsageData.json";
import sourceData from "./data/DataTest.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const OverallUsageChart = () => {
  return (
    <>
      <h2 className="ml-14 my-10">Dashboard</h2>
      <div className="App grid grid-cols-12 gap-14 mx-14">
        <div className="dataChart OverallUsageChart col-span-12 h-[40vh]">
          {/* <h3>Overall Usage</h3> */}
          <Line
            data={{
              labels: OverallUsageData.map((data) => data.label),
              datasets: [
                {
                  label: "Last Year",
                  data: OverallUsageData.map((data) => data.overall),
                  backgroundColor: "rgba(227, 181, 26, 0.5)",
                  borderColor: "rgba(235, 220, 0, 0.8)",

                  borderWidth: 2,
                  fill: true,

                  pointRadius: 0, // Remove point dots
                  pointHoverRadius: 0, // Remove point dots on hover
                },
                {
                  label: "This Year",
                  data: OverallUsageData.map((data) => data.cost),
                  backgroundColor: "rgba(227, 181, 26, 0.5)",
                  borderColor: "rgba(235, 220, 0, 0.8)",

                  borderWidth: 2,
                  fill: true,

                  pointRadius: 0, // Remove point dots
                  pointHoverRadius: 0, // Remove point dots on hover
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.3,
                },
              },

              plugins: {
                title: {
                  display: true,
                  text: "Overall Usage",
                  color: "#FFF",
                  font: {
                    family: "'Poppins', sans-serif",
                    // size: 16, // Font size
                    weight: "normal", // Font weight
                  },
                },
              },

              scales: {
                y: {
                  grid: {
                    color: "rgba(255,255,255,0.1)", // Color of grid lines
                  },
                  ticks: {
                    color: "#000000", // Color of y-axis labels
                    fontSize: 16,
                  },
                },
                x: {
                  grid: {
                    color: "rgba(255,255,255,0.1)", // Color of grid lines
                  },
                  ticks: {
                    color: "#000000", // Color of x-axis labels
                    fontSize: 36,
                  },
                },
              },
            }}
          />
        </div>

        <div className="dataChart SmallChart1 col-span-12 md:col-span-12 xl:col-span-4 h-[40vh]">
          {/* <h3>Users</h3> */}

          <Line
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: "rgba(227, 181, 26, 0.5)",
                  borderColor: "rgba(235, 220, 0, 0.8)",

                  borderWidth: 2,
                  fill: true,
                  // backgroundColor: [
                  //   "rgba(43, 63, 229, 0.8)",
                  //   "rgba(250, 192, 19, 0.8)",
                  //   "rgba(213, 165, 135, 0.8)",
                  // ],

                  borderRadius: 5,

                  // fill: true,
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.3,
                },
              },

              plugins: {
                title: {
                  text: "Users",

                  font: {
                    family: "'Poppins', sans-serif",
                    // size: 16, // Font size
                    weight: "normal", // Font weight
                  },
                },
              },
            }}
          />
        </div>

        <div className="dataChart SmallChart2 col-span-12 md:col-span-12 xl:col-span-4 h-[40vh]">
          {/* <h3>Usage</h3> */}

          <Line
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: "rgba(227, 181, 26, 0.5)",
                  borderColor: "rgba(235, 220, 0, 0.8)",
                  borderRadius: 5,

                  fill: true,
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.3,
                },
              },

              plugins: {
                title: {
                  text: "Usage",

                  font: {
                    family: "'Poppins', sans-serif",
                    // size: 16, // Font size
                    weight: "normal", // Font weight
                  },
                },
              },
            }}
          />
        </div>

        <div className="dataChart PieChart col-span-12 md:col-span-12 xl:col-span-4 h-[40vh]">
          {/* <h3>Active vs Inactive</h3> */}
          <Doughnut
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(213, 165, 135, 0.8)",
                  ],
                  borderRadius: 5,
                  borderColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(213, 165, 135, 0.8)",
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Active & Inactive",

                  font: {
                    family: "'Poppins', sans-serif",
                    // size: 16, // Font size
                    weight: "normal", // Font weight
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default OverallUsageChart;
