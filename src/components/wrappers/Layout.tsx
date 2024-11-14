import "./Layout.scss";
// Routing
import { Outlet } from "react-router-dom";
// Components
import Navigationbar from "../navigation/NavigationBar";
import Footer from "../navigation/Footer";
import ScrollToTop from "../utils/ScrollToTop";
import Background from "../static/Background";
// Context
import AuthProvider from "../../hooks/AuthProvider";
// Animation
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
  return (
    <AnimatePresence>
      <AuthProvider>
        <div id="layout">
          <Background/>
          <Navigationbar/>
          <div id="layout-content">
            <ScrollToTop/>
            <Outlet/>
          </div>
          <Footer/>
        </div>
      </AuthProvider>
    </AnimatePresence>
  )
};

export default Layout;