import "./Login.scss";
// React
import { useState } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Components
import AuthForm from "../../components/forms/AuthForm";
// APIs
import AuthAPI from "../../apis/AuthAPI";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Hooks
  const navigate = useNavigate();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AuthAPI.login(username, password)
    .then(res => {
      if(res.data.success) {
        console.log("User logged-in");
        navigate("/");
      } else {
        console.log(res.data.message);
        // Reset input fields
        setUsername("");
        setPassword("");
      }
    })
    .catch(err => console.log(err));
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