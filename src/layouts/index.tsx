// import { Link, Outlet } from 'umi';
import "./index.css";
import TopMenu from "@/Components/TopMenu/TopMenu";
import SideBar from "@/Components/SideBar/SideBar";
import MainTable from "@/Components/Maintable/MainTable";
// import ColorModeSwitcher from '../Components/SideBar/colorModeSwitcher'

export default function Layout() {
  return (
    <div>
      <div className="mainpage">
        <SideBar />
        <TopMenu />
        {/* <ColorModeSwitcher/> */}
        {/* <Outlet /> */}
      </div>
      <MainTable />
    </div>
  );
}
