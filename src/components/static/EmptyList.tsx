import "./EmptyList.scss";
// Animation
import { motion } from "framer-motion";

interface EmptyListProps {
  mode: "allPolls" | "userPolls" | "allUsers";
}

const EmptyList: React.FC<EmptyListProps> = ({mode}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <div id="emptyList">
        {mode === "allPolls" && "No polls..."}
        {mode === "userPolls" && "User has no polls..."}
        {mode === "allUsers" && "No users..."}
      </div>
    </motion.div>
  );
};

export default EmptyList;