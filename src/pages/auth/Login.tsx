import "./Login.scss";
// React
import { useState } from "react";
// Components
import AuthForm from "../../components/forms/AuthForm";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Hooks
  const auth = useAuth();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.login(username, password);
  }

  return(
    <div id="login">
      <div id="login-header">Login</div>
      <div id="login-form">
        <AuthForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          submitForm={submitForm}
          />
      </div>
    </div>
  )
};

export default Login;