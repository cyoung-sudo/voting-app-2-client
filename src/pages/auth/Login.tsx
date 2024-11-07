import "./Login.scss";
// React
import { useState } from "react";
// Components
import AuthForm from "../../components/forms/AuthForm";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    setUsername("");
    setPassword("");
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