import "./AllPolls.scss";
// React
import { useState, useEffect } from "react";
// Routing
import { useLoaderData } from "react-router-dom";
// Components
import PollsList from "../../components/lists/PollsList";
import EmptyList from "../../components/static/EmptyList";
// Hooks
import usePagination from "../../hooks/usePagination";
// Types
import { Poll } from "../../types/index.ds";

const AllPolls = () => {
  // Page content
  const [pageContent, setPageContent] = useState<Poll[] | null>(null);
  // Hooks
  const polls = useLoaderData() as Poll[];
  const {currentPage, totalPages, currentData, nextPage, prevPage} = usePagination(polls, 5);

  // Update content on page change
  useEffect(() => {
    let data = currentData() as Poll[];
    setPageContent(data);
    // Scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentPage])

  return(
    <div id="allPolls">
      <div id="allPolls-header">Polls</div>
      <div id="allPolls-list">
        {pageContent && (polls.length > 0) &&
          <PollsList 
            polls={pageContent}
            privilege={false}/>
        }
        {(polls.length <= 0) &&
          <EmptyList mode="allPolls"/>
        }
      </div>
      <div id="allPolls-pagination">
        <button 
          id="allPolls-prev" 
          className="btn-styling"
          onClick={prevPage}>
          Prev
        </button>
        <div>{currentPage} / {totalPages}</div>
        <button 
          id="allPolls-next" 
          className="btn-styling"
          onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  )
};

export default AllPolls;