import "./AllPolls.scss";
// Routing
import { useLoaderData } from "react-router-dom";
// Components
import PollsList from "../../components/lists/PollsList";
// Types
import { Poll } from "../../types/index.ds";

const AllPolls = () => {
  // Hooks
  const polls = useLoaderData() as Poll[];

  return(
    <div id="allPolls">
      <div id="allPolls-header">Polls</div>
      <div id="allPolls-list">
        <PollsList 
          polls={polls}
          privilege={false}/>
      </div>
    </div>
  )
};

export default AllPolls;