import React from "react";
import "./index.css";
import TopMenu from "@/Components/TopMenu/TopMenu";
import SideBar from "@/Components/SideBar/SideBar";
// import ColorModeSwitcher from '../Components/SideBar/colorModeSwitcher'

export default function Layout() {
  return (
    <div>
      <div className="mainpage">
        <SideBar />
        <TopMenu />
        {/* <ColorModeSwitcher/> */}
      </div>
    </div>
  );
}
