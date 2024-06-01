import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x-axis
  LinearScale, //y-axis
  PointElement,
  Legend,
  Tooltip,
  BarElement,
  BarController,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  BarElement,
  BarController,
);

export default function BarChart() {


  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Income",
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
        backgroundColor: [
          'rgb(255, 99, 132, 0.8)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
        ],
        
        // borderRadius: 50,
        borderWidth: 1,
        fill: false,
        pointBoarderColor: "#2B3674",
      },
      
      {
        label: "Expenses",
        data: [75, 65, 78, 60, 62, 59, 80, 65, 59, 80, 81, 56],
        backgroundColor: [
          'rgb(54, 162, 235, 0.8)',
        ],
        borderColor: [
          'rgb(54, 162, 235)',
        ],
        // borderRadius: 50,
        borderWidth: 1,
        fill: false,
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
        // max: 10000,
      },
    },
  };

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <Bar 
        data={data} 
        className="max-h-[240px]" 
        options={options}>
      </Bar>
      </div>
  );
}
