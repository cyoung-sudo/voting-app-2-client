import "./AllUsers.scss";
// Routing
import { useLoaderData } from "react-router-dom";
// Components
import UsersList from "../../components/lists/UsersList";
// Types
import { User } from "../../types/index.ds";

const AllUsers = () => {
  // Hooks
  const users = useLoaderData() as User[];

  return(
    <div id="allUsers">
      <div id="allUsers-header">Users</div>
      <div id="allUsers-list">
        <UsersList users={users} />
      </div>
    </div>
  )
};

export default AllUsers;