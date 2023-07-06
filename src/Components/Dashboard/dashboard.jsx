import React from "react";
import "./dashboard.css";
import { ReactComponent as DashboardIcon } from "../images/dashboard.svg";
import { ReactComponent as Transaction } from "../images/transaction.svg";
import { ReactComponent as Schedules } from "../images/schedule.svg";
import { ReactComponent as User } from "../images/user.svg";
import { ReactComponent as Setting } from "../images/setting.svg";
import { ReactComponent as Search } from "../images/search.svg";
import { ReactComponent as Bell } from "../images/bell.svg";
import { ReactComponent as Revenue } from "../images/revenue.svg";
import { ReactComponent as Transactions } from "../images/transactions.svg";
import { ReactComponent as Like } from "../images/likes.svg";
import { ReactComponent as Users } from "../images/totalUsers.svg";
import { ActivityChart } from "../ActivityChart/activityChart";
import { PieChart, Todo } from "../pieChart/pieChart";

const Dashboard = () => {

  const logout=()=>{
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className="container">
      <div className="navigation">
        <div className="nav-container">
          <div className="heading">Board.</div>
          <div className="navItem">
            <ul>
              <li>
                <DashboardIcon />{" "}
                <span style={{ marginLeft: "6%", fontWeight: "bold" }}>
                  {" "}
                  Dashboard
                </span>
              </li>
              <li>
                <Transaction />{" "}
                <span style={{ marginLeft: "6%" }}> Transactions</span>
              </li>
              <li>
                <Schedules />{" "}
                <span style={{ marginLeft: "6%" }}> Schedules</span>
              </li>
              <li>
                <User /> <span style={{ marginLeft: "6%" }}> Users</span>
              </li>
              <li>
                <Setting /> <span style={{ marginLeft: "6%" }}> Settings</span>
              </li>
            </ul>
          </div>
          <div className="footer">
            <ul>
              <li>Help</li>
              <li>Contact Us</li>
              <li> <button id="logout-btn" onClick={logout}>Logout
              </button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dashboard">
        <div className="header">
          <div className="header-heading">Dashboard</div>
          <div className="header-item">
            <div className="search">
              <input type="text" placeholder="Search..."></input>
              <Search width="14px" />
            </div>
            <div className="bell">
              <Bell />
            </div>
            <div className="image">
              <img
                src="https://www.pngmart.com/files/22/Borat-PNG.png"
                alt=""
                style={{ width: "100%" }}
              />
             
            </div>
          </div>
        </div>
        <div className="data">
          <div className="data-box" style={{ backgroundColor: "#DDEFE0" }}>
            <div className="icon">
              <Revenue />
            </div>
            <div className="data-heading">Total Revenues</div>
            <div className="data-value">$2,129,530</div>
          </div>
          <div className="data-box" style={{ backgroundColor: "#f4ecdd" }}>
            <div className="icon">
              <Transactions />
            </div>
            <div className="data-heading">Total Transactions</div>
            <div className="data-value">1,520</div>
          </div>
          <div className="data-box" style={{ backgroundColor: "#efdada" }}>
            <div className="icon">
              <Like />
            </div>
            <div className="data-heading">Total Likes</div>
            <div className="data-value">9721</div>
          </div>
          <div className="data-box" style={{ backgroundColor: "#dee0ef" }}>
            <div className="icon">
              <Users />
            </div>
            <div className="data-heading">Total Users</div>
            <div className="data-value">892</div>
          </div>
        </div>
        <div className="activity">
          <ActivityChart />
        </div>
        <div className="data-graph">
          <div className="chart-box">
            <div className="data-container">
              <PieChart />
            </div>
          </div>
          <div className="chart-box">
            <div className="data-container">
              <Todo />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
