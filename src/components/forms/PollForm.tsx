import "./PollForm.scss";
// Animation
import { motion } from "framer-motion";

interface PollFormProps {
  title: string;
  desc: string;
  choices: string;
  setTitle: (title: string) => void;
  setDesc: (desc: string) => void;
  setChoices: (choices: string) => void;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PollForm: React.FC<PollFormProps> = ({title, desc, choices, setTitle, setDesc, setChoices, submitForm}) => {
  return(
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
      <form id="pollForm" onSubmit={submitForm}>
        <div className="pollForm-group">
          <label htmlFor="pollForm-title">Title</label>
          <input 
            onChange={e => setTitle(e.target.value)}
            value={title}
            type="text" 
            id="pollForm-title"/>
        </div>

        <div className="pollForm-group">
          <label htmlFor="pollForm-desc">Description</label>
          <input 
            onChange={e => setDesc(e.target.value)}
            value={desc}
            type="text" 
            id="pollForm-desc"/>
        </div>

        <div className="pollForm-group">
          <label htmlFor="pollForm-choices">
            Choices <span>(separate with commas)</span>
          </label>
          <textarea 
            onChange={e => setChoices(e.target.value)}
            value={choices}
            id="pollForm-choices"/>
        </div>

        <div className="pollForm-submit">
          <button className="btn-styling" type="submit">Submit</button>
        </div>
      </form>
    </motion.div>
  )
};

export default PollForm;