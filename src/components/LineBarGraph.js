import React from "react";
import { Line } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Revenue Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Ads Revenue($)",
      },
      ticks: {
        callback: (value) => `$${value}`,
      },
      grid: {
        display: false,
      },
    },
    y1: {
      beginAtZero: true,
      min: 0,
      max: 100,
      title: {
        display: true,
        text: "ACSO(%)",
      },
      position: "right",
      grid: {
        display: true,
      },
      ticks: {
        stepSize: 20,
      },
    },
  },
  layout: {
    padding: {
      right: 30, // Adjust the right padding to accommodate the right y-axis labels
    },
  },
  elements: {
    bar: {
      borderWidth: 1,
      categoryPercentage: 0.8,
      barPercentage: 0.7,
      backgroundColor: "#165DFF",
    },
    line: {
      borderWidth: 1,
      backgroundColor: "#14C9C9",
    },
    point: {
      radius: 0,
      pointStyle: "line",
    },
  },
  responsiveAnimationDuration: 0, // Disable animation for a smoother rendering
};

const barAndLineData = {
  labels: ["23", "24", "25", "26", "27", "28", "29", "30", "1", "2", "3", "4"],
  datasets: [
    {
      type: "line",
      label: "ACSO",
      data: [20, 60, 30, 80, 60, 50, 90, 60, 20, 80, 70, 40],
      borderColor: "#14C9C9",
      yAxisID: "y1",
      fill: false,
    },
    {
      type: "bar",
      label: "Revenue",
      data: [200, 400, 600, 800, 700, 500, 900, 300, 500, 700, 600, 400],
      backgroundColor: "#165DFF",
      yAxisID: "y",
    },
  ],
};

export const LineBarGraph = () => {
  return (
    <div>
      <Line options={options} data={barAndLineData} height={210} width={420} />
    </div>
  );
};
