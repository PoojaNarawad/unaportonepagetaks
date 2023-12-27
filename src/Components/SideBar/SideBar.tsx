import { Link } from "umi";
import logo from "../../assets/logo.png";
import dashboard from "../../assets/dashboard.png";
import "./sidebar.css";
import live1 from "../../assets/live1.png";
import darkmode from "../../assets/darkmode.png";
import logout from "../../assets/logout.png";
import help from "../../assets/help.jpeg";

export default function Layout() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} width="100" />
      </div>
      <Link to="/">
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
      <div className="livetoggle">
        <div>
          {" "}
          <img src={live1} width="15" />
        </div>
        <div className="live1">Dark Mode</div>
        <div>
          <img src={darkmode} width="30" />
        </div>
      </div>

      <div className="help">
        <img src={help} width="15" />
        Help
      </div>

      <div className="logout">
        <img src={logout} width="15" />
        Log Out
      </div>
    </div>
  );
}
