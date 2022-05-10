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
        <li>
          <Link to="/drawer">Drawer Menu</Link>
        </li>
        <li>
          <Link to="/navigation">Navigation Mode</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeView;
