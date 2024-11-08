import "./NewPoll.scss";
// React
import { useState } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Components
import PollForm from "../../components/forms/PollForm";
// APIs
import PollAPI from "../../apis/PollAPI";

const NewPoll = () => {
  // Controlled inputs
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [choices, setChoices] = useState("");
  // Hooks
  const navigate = useNavigate();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    PollAPI.create(title, desc, choices)
    .then(res => {
      if(res.data.success) {
        console.log("Poll created");
        navigate("/polls");
      } else {
        console.log(res.data.message);
        // Reset fields
        setTitle("");
        setDesc("");
        setChoices("");
      }
    })
    .catch(err => console.log(err));
  }

  return(
    <div id="newPoll">
      <div id="newPoll-header">New Poll</div>
      <div id="newPoll-form">
        <PollForm
          title={title}
          desc={desc}
          choices={choices}
          setTitle={setTitle}
          setDesc={setDesc}
          setChoices={setChoices}
          submitForm={submitForm}/>
      </div>
    </div>
  )
};

export default NewPoll;