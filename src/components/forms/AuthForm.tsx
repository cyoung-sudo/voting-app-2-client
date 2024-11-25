import "./AuthForm.scss";
// Animation
import { motion } from "framer-motion";

interface AuthFormProps {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({username, password, setUsername, setPassword, submitForm}) => {
  return(
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <form id="authForm" onSubmit={submitForm}>
        <div className="authForm-group">
          <label htmlFor="authForm-username">Username</label>
          <input 
            onChange={e => setUsername(e.target.value)}
            value={username}
            type="text" 
            id="authForm-username"/>
        </div>
        <div className="authForm-group">
          <label htmlFor="authForm-password">Password</label>
          <input 
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password" 
            id="authForm-password"/>
        </div>
        <div className="authForm-submit">
          <button className="btn-styling" type="submit">Submit</button>
        </div>
      </form>
    </motion.div>
  )
};

export default AuthForm;