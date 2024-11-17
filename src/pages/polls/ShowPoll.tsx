import "./ShowPoll.scss";
// React
import { useState, useEffect } from "react";
// Routing
import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
// Components
import ColumnChart from "../../components/charts/ColumnChart";
import VoteForm from "../../components/forms/VoteForm";
// APIs
import PollAPI from "../../apis/PollAPI";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";
import { usePopup } from "../../hooks/PopupProvider";
// Types
import { Poll } from "../../types/index.ds";

interface LoaderData {
  poll: Poll;
  voted: boolean | null;
}

const ShowPoll = () => {
  // Controlled Input
  const [choice, setChoice] = useState("");
  // Formatted Data
  const [chartData, setChartData] = useState<{ choice: string; count: number; }[]>([]);
  // Hooks
  const {poll, voted} = useLoaderData() as LoaderData;
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {openPopup} = usePopup();

  useEffect(() => {
    // Format data for chart
    let formattedData = poll.choices.map(choice => {
      return {
        choice: choice.desc,
        count: choice.count
      };
    });
    setChartData(formattedData)
  }, [location])

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(auth.authUser) {
      PollAPI.vote(poll._id, choice)
      .then(res => {
        if(res.data.success) {
          // Reload loader data
          navigate('.', { replace: true });
          openPopup("Voted")
        } else {
          openPopup(res.data.message);
        }
      })
      .catch(err => console.log(err));
    }
  }

  return(
    <div id="showPoll">
      <div id="showPoll-header">
        <div id="showPoll-title">{poll.title}</div>
        <div id="showPoll-desc">{poll.desc}</div>
      </div>

      {chartData &&
        <div id="showPoll-chart">
          <ColumnChart data={chartData}/>
        </div>
      }

      {auth.authUser && !voted &&
        <div id="showPoll-form">
          <VoteForm
            choices={poll.choices}
            setChoice={setChoice}
            submitForm={submitForm}/>
        </div>
      }

      {auth.authUser && voted &&
        <div>Already voted</div>
      }
    </div>
  )
};

export default ShowPoll;