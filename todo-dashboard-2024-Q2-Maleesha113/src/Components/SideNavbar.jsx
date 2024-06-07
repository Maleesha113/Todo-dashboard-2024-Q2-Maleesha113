// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavbar.css'; // Create this file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Acmy Solutions</h2>
      <ul>
        <li>
          <Link to="/">Dshboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
