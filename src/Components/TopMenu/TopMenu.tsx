import blackwhitecircle from "../../assets/live1.png";
import toggle from "../../assets/live2.png";
import notificationbell from "../../assets/notificationbell.png";
import avtar from "../../assets/avtar.png";
import "./topmenu.css";
import React from "react";
import MainTable from "@/Components/Maintable/MainTable";
// import { AiOutlineSearch } from 'react-icons/ai';

const tableData = [
  {
    checkbox:"",
    ConsentID: "-",
    Vuaid: "9652902011@ink",
    Tracking: "test_18Dec",
    CreatedBy: "sidharthshetty@hi2.in",
    ConsentHandle: "19d2e198-4f2d-4d31-8791-13d2b3c62d9d",
    CreatedOn: "12/18/2023, 10:15:46 am",
    FIPIDs: "-",
    Status: "Created",
    Operations: "img",
  },
  {
    ConsentID: "-",
    Vuaid: "9652902011@ink",
    Tracking: "test_18Dec",
    CreatedBy: "sidharthshetty@hi2.in",
    ConsentHandle: "19d2e198-4f2d-4d31-8791-13d2b3c62d9d",
    CreatedOn: "12/18/2023, 10:15:46 am",
    FIPIDs: "-",
    Status: "Created",
    Operations: "img",
  },
  {
    checkbox:"true",
    ConsentID: "-",
    Vuaid: "9652902011@ink",
    Tracking: "test_18Dec",
    CreatedBy: "sidharthshetty@hi2.in",
    ConsentHandle: "19d2e198-4f2d-4d31-8791-13d2b3c62d9d",
    CreatedOn: "12/18/2023, 10:15:46 am",
    FIPIDs: "-",
    Status: "Created",
    Operations: "img",
  },
  {
    checkbox:"true",
    ConsentID: "-",
    Vuaid: "9652902011@ink",
    Tracking: "test_18Dec",
    CreatedBy: "sidharthshetty@hi2.in",
    ConsentHandle: "19d2e198-4f2d-4d31-8791-13d2b3c62d9d",
    CreatedOn: "12/18/2023, 10:15:46 am",
    FIPIDs: "-",
    Status: "Created",
    Operations: "img",
  },
  {
    ConsentID: "-",
    Vuaid: "9652902011@ink",
    Tracking: "test_18Dec",
    CreatedBy: "sidharthshetty@hi2.in",
    ConsentHandle: "19d2e198-4f2d-4d31-8791-13d2b3c62d9d",
    CreatedOn: "12/18/2023, 10:15:46 am",
    FIPIDs: "-",
    Status: "Created",
    Operations: "img",
  },
];
const TopMenu: React.FC = () => {
  return (
    <div>
      <div className="topmenu">
        <div className="header-search">
          <input type="search" placeholder="Search" />
          <div className='searchbaricon'>
        {/* <AiOutlineSearch size={25} /> */}
        </div>
        </div>
        <div className="header-end">
        <div className="livetoggle">
          <img src={blackwhitecircle} width="20" height={20} />
          <p className="livetext">Live</p>
          <img src={toggle} width="30" height={15} />
          <div className="notification">
            <img src={notificationbell} width="20" />
          </div>
        </div>
        <div className="avtar">
            <img src={avtar} width="40" /> 
            <div className="nameemail">
            <h5 className="name">Vishal Adhlakha</h5>
            <h6 className="email">vishaladhalkha@mail.com</h6>
            </div>
        </div>
        </div>
      </div>
      <MainTable tableData={tableData} />
    </div>
  );
};

export default TopMenu;
