import "./ShowPoll.scss";
// React
import { useState, useEffect } from "react";
// Routing
import { useLoaderData } from "react-router-dom";
// Types
import { Poll } from "../../types/index.ds";
// Charts
import Chart from "react-google-charts";

const ShowPoll = () => {
  // Formatted Data
  const [chartData, setChartData] = useState<(string | number)[][]>([]);
  // Hooks
  const poll = useLoaderData() as Poll;

  useEffect(() => {
    // Format data for chart
    let formattedData = poll.choices.map(choice => [choice.desc, choice.count]);
    formattedData.unshift(["Choice", "Votes"]);
    setChartData(formattedData)
  }, [])

  return(
    <div id="showPoll">
      <div id="showPoll-header">
        <div id="showPoll-title">{poll.title}</div>
        <div id="showPoll-desc">{poll.desc}</div>
      </div>

      {chartData &&
        <div id="showPoll-chart">
          <Chart chartType="ColumnChart" width="100%" height="100%" data={chartData} />
        </div>
      }


    </div>
  )
};

export default ShowPoll;