import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import LoginPage from "./Components/Login/login";


function App() {
  return (
      <div>
        <LoginPage/>
      </div>
  );
}

export default App;
