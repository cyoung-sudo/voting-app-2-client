import "./Profile.scss";
// Routing
import { useLoaderData, useNavigate } from "react-router-dom";
// Components
import PollsList from "../../components/lists/PollsList";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";
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
  // Hooks
  const {user, userPolls} = useLoaderData() as LoaderData;
  const auth = useAuth();
  const navigate = useNavigate();

  const deletePoll = (pollId: string) => {
    PollAPI.deletePoll(pollId)
    .then(res => {
      if(res.data.success) {
        console.log("Poll deleted")
        // Reload loader data
        navigate('.', { replace: true });
      }
    })
    .catch(err => console.log(err));
  };

  const deleteUser = () => {
    UserAPI.deleteUser()
    .then(res => {
      if(res.data.success) {
        console.log("User deleted");
        navigate("/");
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
        <PollsList 
          polls={userPolls}
          privilege={auth.authUser && (auth.authUser._id === user._id) ? true : false}
          deletePoll={deletePoll}/>
      </div>
    </div>
  )
};

export default Profile;