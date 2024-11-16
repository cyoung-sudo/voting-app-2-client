import "./Popup.scss";
// Hooks
import { usePopup } from "../../hooks/PopupProvider";
// Animation
import { motion } from "framer-motion";

const Popup = () => {
  // Hooks
  const {message} = usePopup();
  
  if(message) {
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      >
        <div id="popup">
          <div>{message}</div>
        </div>
      </motion.div>
    );
  }
};

export default Popup;