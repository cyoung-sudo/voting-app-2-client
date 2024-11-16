import "./Layout.scss";
// Routing
import { Outlet } from "react-router-dom";
// Components
import Navigationbar from "../navigation/NavigationBar";
import Footer from "../navigation/Footer";
import ScrollToTop from "../utils/ScrollToTop";
import Background from "../static/Background";
import Popup from "../popup/Popup";
// Context
import AuthProvider from "../../hooks/AuthProvider";
import PopupProvider from "../../hooks/PopupProvider";
// Animation
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
  return (
    <AnimatePresence>
      <PopupProvider>
        <AuthProvider>
          <div id="layout">
            <Background/>
            <Navigationbar/>
            <Popup/>
            <div id="layout-content">
              <ScrollToTop/>
              <Outlet/>
            </div>
            <Footer/>
          </div>
        </AuthProvider>
      </PopupProvider>
    </AnimatePresence>
  )
};

export default Layout;