import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Click Through Rate Chart",
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
        text: "Clicks($)",
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
        text: "CTR",
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
    line: {
      backgroundColor: "#FFFFFF",
      borderWidth: 1.5,
    },
    point: {
      radius: 0,
      pointStyle: "line",
    },
  },
  responsiveAnimationDuration: 0, // Disable animation for a smoother rendering
};

const lineData = {
  labels: ["23", "24", "25", "26", "27", "28", "29", "30", "1", "2", "3", "4"],
  datasets: [
    {
      type: "line",
      label: "CTR",
      data: [
        0, 2000, 3000, 8000, 6000, 5000, 11000, 6000, 2000, 8000, 7000, 4000,
      ],
      borderColor: "#14C9C9",
      yAxisID: "y",
      fill: false,
    },
    {
      type: "line",
      label: "Clicks",
      data: [
        1000, 2500, 3500, 8500, 6500, 5500, 9500, 7500, 3000, 9000, 6000, 3000,
      ],
      borderColor: "#165DFF",
      yAxisID: "y",
      fill: false,
    },
  ],
};

export const LineGraph = () => {
  React.useEffect(() => {
    // Register a custom scale for the right y-axis
    Chart.register({
      id: "y1",
      afterDraw: (chart, args, options) => {
        const scales = chart.scales;
        const ctx = chart.ctx;
        const yAxis = scales.y1;
        const yAxisWidth = yAxis.width;

        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = yAxis.options.color;
        ctx.beginPath();
        const y = yAxis.getPixelForValue(yAxis.min);
        ctx.moveTo(yAxisWidth, y);
        ctx.lineTo(chart.width, y);
        ctx.stroke();
        ctx.restore();
      },
    });
  }, []);

  return (
    <div>
      <Line options={options} data={lineData} height={210} width={420} />
    </div>
  );
};
