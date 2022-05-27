import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <h1>Demo Components</h1>
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
        <li>
          <Link to="/text-to-speach">Text to Speach</Link>
        </li>
        <li>
          <Link to="/add-text-to-speach">Add text to Speach</Link>
        </li>
        <li>
          <Link to="/navigation-control">Navigation Control</Link>
        </li>
      </ul>

      <h1>Mock Integration</h1>
      <ul>
        <li>
          <Link to="/manual-navigation">Manual Navigation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Index;
