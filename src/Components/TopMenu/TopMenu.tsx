import live1 from "../../assets/live1.png";
import live2 from "../../assets/live2.png";
import notificationbell from "../../assets/notificationbell.png";
import avtar from "../../assets/avtar.png";
import "./topmenu.css";
import React from 'react';
import MainTable from "@/Components/Maintable/MainTable";

const  TopMenu : React.FC = () => {
  return (
    <div>
      <div className="topmenu">
      <div className="livetoggle">
        <div>
          <img src={live1} width="15" />
        </div>
        <div className="live1">Live</div>

        <div>
          <img src={live2} width="30" />
        </div>
        <div className="notification">
          <img src={notificationbell} width="20" />
        </div>
      </div>

      <div className="avtar">
        <div className="avtarimg">
          <img src={avtar} width="35" />
        </div>
        <div className="nameemail">
          <h5 className="name">Vishal Adhlakha</h5>
          <h6 className="email">vishal@gmail.com</h6>
        </div>
      </div>
    </div>
    <MainTable />
    </div>
  );
}

export default TopMenu;