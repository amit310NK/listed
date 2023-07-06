import React from "react";
import "./activityChart.css";
import { ReactComponent as DownArrow } from "../images/downArrow.svg";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useState } from "react";
ChartJS.register(
  Title,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

export const ActivityChart = () => {
  const [data, setData] = useState({
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "First Dataset",
        data: [200, 400, 250, 310],
        // backgroundColor:"none",
        borderColor: "#9BDD7C",
        tension: 0.5,
        pointStyle: "none",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0,0,0,0)",
      },
      {
        label: "Second Dataset",
        data: [300, 350, 150, 400],
        // backgroundColor:"none",
        borderColor: "#E9A0A0",
        tension: 0.5,
        pointStyle: "none",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0,0,0,0)",
      },
    ],
  });

  return (
    <div className="activity-container">
      <div className="activity-header">
        <div className="activity-month">
          <div className="text">Activities</div>
          <div className="date">
            May - June 2021 &nbsp;
            <DownArrow />
          </div>
        </div>
        <div className="user-type">
          <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
            <li style={{ color: "#E9A0A0" }}>
              <span style={{ color: "black", fontSize: "14px" }}>User</span>
            </li>
            <li style={{ color: "#9BDD7C" }}>
              <span style={{ color: "black", fontSize: "14px" }}>Guest</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="activity-graph">
        <Line data={data}></Line>
      </div>
    </div>
  );
};
