import "./VoteForm.scss";
// Bootstrap
import Form from 'react-bootstrap/Form';
// Animation
import { motion } from "framer-motion";

interface VoteFormProps {
  choices: [{desc: string, count: number}];
  setChoice: (choice: string) => void;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const VoteForm: React.FC<VoteFormProps> = ({choices, setChoice, submitForm}) => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
      <form id="voteForm" onSubmit={submitForm}>
        <Form.Select 
          className="voteForm-choices"
          onChange={e => setChoice(e.target.value)}>
          {choices.map((choice, idx) => (
            <option value={choice.desc} key={idx}>{choice.desc}</option>
          ))}
        </Form.Select>

        <div className="voteForm-submit">
          <button className="btn-styling" type="submit">Vote</button>
        </div>
      </form>
    </motion.div>
  );
};

export default VoteForm;