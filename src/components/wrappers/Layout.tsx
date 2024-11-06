import "./Layout.scss";
// Routing
import { Outlet } from "react-router-dom";
// Components
import Navigationbar from "../navigation/NavigationBar";
import Footer from "../navigation/Footer";

const Layout = () => {
  return (
    <div id="layout">
      <Navigationbar/>
      <div id="layout-content">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
};

export default Layout;