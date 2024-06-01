'use client'

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState, useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function BarChartSalary({ info }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const tooltipRef = useRef();

  useEffect(() => {
    console.log('info:', info);
    if (!info) {
      console.error('info prop is missing or undefined');
    } else {
      const labels = info.map(item => item.name);
      const data = info.map(item => item.salary);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Salary",
            data: data,
            backgroundColor: 'rgba(252, 196, 62, 0.6)',
            borderColor: 'rgba(252, 196, 62, 1)',
            borderWidth: 1,
          },
        ],
      });
    }
  }, [info]);

  const customTooltip = (context) => {
    const tooltipModel = context.tooltip;
    if (!tooltipModel || !tooltipModel.body) {
      tooltipRef.current.style.opacity = 0;
      return;
    }

    const tooltipEl = tooltipRef.current;
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = tooltipModel.caretX + 'px';
    tooltipEl.style.top = tooltipModel.caretY + 'px';

    const teacher = info[tooltipModel.dataPoints[0].dataIndex];

    tooltipEl.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center;" >
        <img src="${teacher.img}" alt="${teacher.name}" style="width: 50px; height: 50px; border-radius: 50%;" />
        <p>${teacher.name}: $${teacher.salary}</p>
        <p>${teacher.subject}</p>
        <p>${teacher.contact}</p>
      </div>
    `;
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Teacher Salaries',
      },
      tooltip: {
        enabled: false,
        external: customTooltip,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', overflowX: 'auto', position: 'relative' }}>
      <Bar data={chartData} options={options}></Bar>
      <div
        ref={tooltipRef}
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          borderRadius: '3px',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.3s',
          padding: '10px',
        }}
      ></div>
    </div>
  );
}