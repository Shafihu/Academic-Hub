"use client";

import * as React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x-axis
  LinearScale, //y-axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export default function BasicLineChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Income",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#2B3674",
        tension: 0.4,
        pointBoarderColor: "#2B3674",
      },
      {
        label: "Expenses",
        data: [75, 65, 78, 60, 62, 59, 80],
        fill: false,
        borderColor: "#FB7D5B",
        tension: 0.4,
        pointBoarderColor: "#2B3674",
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        // min: 3,
        // max: 6,
      },
    },
  };

  return (
    <div className="w-[100%] h-[100%]">
      <Line data={data} options={options}></Line>
    </div>
  );
}
