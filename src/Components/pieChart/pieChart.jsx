import React from "react";
import "./pieChart.css";
import { ReactComponent as DownArrow } from "../images/downArrow.svg";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [14, 31, 55],
        backgroundColor: ["#EE8484", "#F6DC7D", "#9BDD7C"],
        borderColor: "rgba(0,0,0,0)",
      },
    ],
  };

  const values = [
    {
      color: "#98D89E",
      label: "Basic Tees",
      value: 55,
    },
    {
      color: "#F6DC7D",
      label: "Custom Short Pants",
      value: 31,
    },
    {
      color: "#EE8484",
      label: "Super Hoodies",
      value: 14,
    },
  ];

  return (
    <>
      <div className="pie-heading">
        <div className="heading-text">Top Products</div>
        <div className="pie-date">
          May - June 2021 &nbsp;
          <DownArrow />
        </div>
      </div>
      <div className="chart-area">
        <div className="pieChart">
          <Pie id="pie" data={data}></Pie>
        </div>
        <div className="chart-desc">
          {values.map((item, key) => {
            return (
              <div key={item.key} className="desc">
                <div className="color">
                  <div
                    className="circle"
                    style={{ backgroundColor: `${item.color}` }}
                  ></div>
                </div>
                <div className="label">
                  <div className="label-name">{item.label}</div>
                  <div className="label-value">{item.value}%</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const Todo = () => {
  return (
    <>
      <div className="pie-heading">
        <div className="heading-text">Today's Schedule</div>
        <div className="pie-date">
          See all &nbsp;
          <DownArrow />
        </div>
      </div>
      <div className="todo-area">
        <div className="bar" style={{ backgroundColor: "#9BDD7C" }}></div>
        <div className="todo-desc">
          <div className="task">Meeting with supplier from Kuta Bali</div>
          <div className="time">14:00 - 15:00</div>
          <div className="location">at Sunset Road , Kuta Bali</div>
        </div>
      </div>
      <div className="todo-area">
        <div className="bar" style={{ backgroundColor: "#6972C3" }}></div>
        <div className="todo-desc">
          <div className="task">Check operation at Giga Factory 1 </div>
          <div className="time">18:00 - 20:00</div>
          <div className="location">at Central Jakrta</div>
        </div>
      </div>
    </>
  );
};
