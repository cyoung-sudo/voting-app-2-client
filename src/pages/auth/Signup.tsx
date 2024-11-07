import "./Signup.scss";
// React
import { useState } from "react";
// Components
import AuthForm from "../../components/forms/AuthForm";

const Signup = () => {
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
    <div id="signup">
      <div id="signup-header">Signup</div>
      <div id="signup-form">
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

export default Signup;