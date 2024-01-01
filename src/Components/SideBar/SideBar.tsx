import React, { useState } from "react";
import { Link } from "umi";
import logo from "../../assets/logo.png";
import dashboard from "../../assets/dashboard.png";
import  "./sidebar.css";
import live1 from "../../assets/live1.png";
import darkmode from "../../assets/darkmode.png";
import logout from "../../assets/logout.png";
import help from "../../assets/help.jpeg";

const SideBar: React.FC = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={handleToggleSidebar}>
        ☰
      </div>
      <div className="logo">
          <img src={logo} width="100" />
        </div>
      <div className="sidebar">
        
        <Link className="dashboard"  to="/">
          <img src={dashboard} width="12" />
          Dashboard
        </Link>

        <Link to="/ConsentRequests">
          <img src={dashboard} width="12" />
          Consent Requests
        </Link>

        <Link to="/FIRequests">
          <img src={dashboard} width="12" />
          FI Requests
        </Link>

        <Link to="/Configuration">
          <img src={dashboard} width="12" />
          Configuration
        </Link>

        <Link to="/Audits">
          <img src={dashboard} width="12" />
          Audits
        </Link>

        <Link to="/KYC">
          <img src={dashboard} width="12" />
          KYC
        </Link>
      </div>
      <div className="darkmodetoggle">
          <img src={live1} width="15" />
          <p>Dark Mode</p>
          <img src={darkmode} width="30" />
        </div>

        <div className="help">
          <img src={help} width="20" />
          Help
        </div>
      <div className="logout">
        <img src={logout} width="20" />
        Log Out
      </div>
    </div>
  );
};

export default SideBar;

