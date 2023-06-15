import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { date: "23", revenue: 500 },
  { date: "24", revenue: 800 },
  { date: "25", revenue: 600 },
  { date: "26", revenue: 900 },
  { date: "27", revenue: 750 },
  { date: "28", revenue: 1100 },
  { date: "29", revenue: 950 },
  { date: "30", revenue: 1200 },
  { date: "1", revenue: 1400 },
  { date: "2", revenue: 1050 },
  { date: "3", revenue: 900 },
  { date: "4", revenue: 1300 },
];

const BarGraph = () => {
  return (
    <BarChart
      width={500}
      height={200}
      data={data}
      barSize={20}
      barCategoryGap={20}
      margin={{ top: 20, right: 10, left: 5, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis unit="$" />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" fill="#8884d8" />
    </BarChart>
  );
};

export default BarGraph;
