import "./PollsList.scss";
// Routing
import { useNavigate } from "react-router-dom";
// Types
import { Poll } from "../../types/index.ds";
// Animation
import { motion } from "framer-motion";

interface PollsListProps {
  polls: Poll[];
}

const PollsList: React.FC<PollsListProps> = ({polls}) => {
  // Hooks
  const navigate = useNavigate();
  // Animation
  const listA = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { delayChildren: 0.3 } } }
  const itemA = { hidden: { opacity: 0, y: -200 }, show: { opacity: 1, y: 0 } }

  return(
    <motion.ul id="pollsList" variants={listA} initial="hidden" animate="show">
      {polls.map((poll, idx) => (
        <motion.li key={idx} variants={itemA}>
          <div className="pollsList-title">{poll.title}</div>
          <div className="pollsList-desc">{poll.desc}</div>
          <ul className="pollsList-choices">
            {poll.choices.map((choice, idx) => (
              <li key={idx}>
                {choice.desc}: {choice.count}
              </li>
            ))}
          </ul>
          <div className="pollsList-status">
            Status: <span className={poll.closed ? "fail" : "success"}>{poll.closed ? "closed" : "open"}</span>
          </div>
          <div className="pollsList-date">Joined: {new Date(poll.createdAt).toDateString()}</div>
          <div className="pollsList-btns">
            <button className="btn-styling" onClick={() => navigate(`/polls/${poll._id}`)}>
              View
            </button>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  )
};

export default PollsList;