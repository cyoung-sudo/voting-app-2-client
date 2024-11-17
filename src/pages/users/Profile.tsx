import "./Profile.scss";
// React
import { useState, useEffect } from "react";
// Routing
import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
// Components
import PollsList from "../../components/lists/PollsList";
import EmptyList from "../../components/static/EmptyList";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";
import { usePopup } from "../../hooks/PopupProvider";
import usePagination from "../../hooks/usePagination";
// APIs
import UserAPI from "../../apis/UserAPI";
import PollAPI from "../../apis/PollAPI";
// Types
import { User, Poll } from "../../types/index.ds";

interface LoaderData {
  user: User,
  userPolls: Poll[]
}

const Profile = () => {
  // Page content
  const [pageContent, setPageContent] = useState<Poll[] | null>(null);
  // Hooks
  const {user, userPolls} = useLoaderData() as LoaderData;
  const auth = useAuth();
  const {openPopup} = usePopup();
  const navigate = useNavigate();
  const location = useLocation();
  const {currentPage, totalPages, currentData, nextPage, prevPage} = usePagination(userPolls, 5);

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
  }, [currentPage, location])

  const deletePoll = (pollId: string) => {
    PollAPI.deletePoll(pollId)
    .then(res => {
      if(res.data.success) {
        // Reload loader data
        navigate('.', { replace: true });
        openPopup("Poll deleted");
      }
    })
    .catch(err => console.log(err));
  };

  const deleteUser = () => {
    UserAPI.deleteUser()
    .then(res => {
      if(res.data.success) {
        navigate("/");
        openPopup("User deleted");
      }
    })
    .catch(err => console.log(err));
  }

  return(
    <div id="profile">
      <div id="profile-left">
        <div id="profile-username">{user.username}</div>
        <div id="profile-info">
          <div>Joined: {new Date(user.createdAt).toDateString()}</div>
          <div>Polls Created: {userPolls.length}</div>
        </div>
        {auth.authUser && (auth.authUser._id === user._id) &&
          <div id="profile-btns">
            <button 
              onClick={deleteUser}
              className="btn-styling">
              Delete Account
            </button>
          </div>
        }
      </div>
      <div id="profile-right">
        <div id="profile-polls">
          {pageContent && (userPolls.length > 0) &&
            <PollsList 
              polls={pageContent}
              privilege={auth.authUser && (auth.authUser._id === user._id) ? true : false}
              deletePoll={deletePoll}/>
          }
          {(userPolls.length <= 0) &&
            <EmptyList mode="userPolls"/>
          }
        </div>
        <div id="profile-pagination">
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
    </div>
  )
};

export default Profile;