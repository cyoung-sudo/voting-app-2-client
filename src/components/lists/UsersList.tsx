import "./UsersList.scss";
// Routing
import { useNavigate } from "react-router-dom";
// Types
import { User } from "../../types/index.ds";
// Animation
import { motion } from "framer-motion";

interface UsersListProps {
  users: User[];
}

const UsersList: React.FC<UsersListProps> = ({users}) => {
  // Hooks
  const navigate = useNavigate();
  // Animation
  const listA = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { delayChildren: 0.3 } } }
  const itemA = { hidden: { opacity: 0, y: -200 }, show: { opacity: 1, y: 0 } }

  return(
    <motion.ul id="usersList" variants={listA} initial="hidden" animate="show">
      {users.map((user, idx) => (
        <motion.li key={idx} variants={itemA}>
          <div className="usersList-username">{user.username}</div>
          <div className="usersList-date">Joined: {new Date(user.createdAt).toDateString()}</div>
          <div className="usersList-btns">
            <button className="btn-styling" onClick={() => navigate(`/users/${user._id}`)}>
              View
            </button>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  )
};

export default UsersList;