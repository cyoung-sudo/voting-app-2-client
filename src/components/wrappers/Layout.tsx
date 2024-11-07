import "./Layout.scss";
// Routing
import { Outlet } from "react-router-dom";
// Components
import Navigationbar from "../navigation/NavigationBar";
import Footer from "../navigation/Footer";
// Animation
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
  return (
    <AnimatePresence>
      <div id="layout">
        <Navigationbar/>
        <div id="layout-content">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </AnimatePresence>
  )
};

export default Layout;