import "./AllUsers.scss";
// React
import { useState, useEffect } from "react";
// Routing
import { useLoaderData } from "react-router-dom";
// Components
import UsersList from "../../components/lists/UsersList";
// Hooks
import usePagination from "../../hooks/usePagination";
// Types
import { User } from "../../types/index.ds";

const AllUsers = () => {
  // Page content
  const [pageContent, setPageContent] = useState<User[] | null>(null);
  // Hooks
  const users = useLoaderData() as User[];
  const {currentPage, totalPages, currentData, nextPage, prevPage} = usePagination(users, 5);

  // Update content on page change
  useEffect(() => {
    let data = currentData() as User[];
    setPageContent(data);
    // Scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentPage])

  return(
    <div id="allUsers">
      <div id="allUsers-header">Users</div>
      {pageContent &&
        <div id="allUsers-list">
          <UsersList users={pageContent} />
        </div>
      }
      <div id="allUsers-pagination">
        <button 
          id="allUsers-prev" 
          className="btn-styling"
          onClick={prevPage}>
          Prev
        </button>
        <div>{currentPage} / {totalPages}</div>
        <button 
          id="allUsers-next" 
          className="btn-styling"
          onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  )
};

export default AllUsers;