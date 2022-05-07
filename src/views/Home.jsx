import React from "react";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/alerted">Alert Prompt</Link>
        </li>
        <li>
          <Link to="/main">Main</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeView;
