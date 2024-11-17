import "./Home.scss";
// Routing
import { useNavigate } from "react-router-dom";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";
// Animation
import { motion } from "framer-motion";
// Styling Libraries
import { LinearGradient } from 'react-text-gradients'

const Home = () => {
  // Hooks
  const auth = useAuth();
  const navigate = useNavigate();

  return(
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <div id="home">
        {auth.authUser &&
          <div id="home-auth">
            <h1>
              <LinearGradient gradient={['to left', 'steelblue ,black']}>
                Start polling now
              </LinearGradient>
            </h1>
            <p>Vote on existing polls or create your own</p>
            <div>
              <button
                onClick={() => navigate("/polls")}
                className="btn-styling">
                View Polls
              </button>
              <button
                onClick={() => navigate("/polls/new")}
                className="btn-styling">
                Create Poll
              </button>
            </div>
          </div>
        }

        {!auth.authUser &&
          <div id="home-noAuth">
            <h1>
              <LinearGradient gradient={['to left', 'steelblue ,black']}>
                Create an account or login
              </LinearGradient>
            </h1>
            <p>Join our community of pollsters</p>
            <div>
              <button
                onClick={() => navigate("/auth/signup")}
                className="btn-styling">
                Signup
              </button>
              <button
                onClick={() => navigate("/auth/login")}
                className="btn-styling">
                Login
              </button>
            </div>
          </div>
        }
      </div>
    </motion.div>
  )
};

export default Home;