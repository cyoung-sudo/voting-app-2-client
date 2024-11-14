import "./Profile.scss";
// Routing
import { useLoaderData } from "react-router-dom";
// Components
import PollsList from "../../components/lists/PollsList";
// Types
import { User, Poll } from "../../types/index.ds";

interface LoaderData {
  user: User,
  userPolls: Poll[]
}

const Profile = () => {
  // Hooks
  const {user, userPolls} = useLoaderData() as LoaderData;

  return(
    <div id="profile">
      <div id="profile-left">
        <div id="profile-username">{user.username}</div>
        <div id="profile-info">
          <div>Joined: {new Date(user.createdAt).toDateString()}</div>
          <div>Polls Created: {userPolls.length}</div>
        </div>
      </div>
      <div id="profile-right">
        <PollsList polls={userPolls}/>
      </div>
    </div>
  )
};

export default Profile;