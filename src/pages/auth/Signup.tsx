import "./Signup.scss";
// React
import { useState } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Components
import AuthForm from "../../components/forms/AuthForm";
// Hooks
import { usePopup } from "../../hooks/PopupProvider";
// APIs
import UserAPI from "../../apis/UserAPI";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Hooks
  const navigate = useNavigate();
  const {openPopup} = usePopup();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    UserAPI.create(username, password)
    .then(res => {
      if(res.data.success) {
        navigate("/auth/login");
        openPopup("User created");
      } else {
        openPopup(res.data.message);
        // Reset input fields
        setUsername("");
        setPassword("");
      }
    })
    .catch(err => console.log(err));
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