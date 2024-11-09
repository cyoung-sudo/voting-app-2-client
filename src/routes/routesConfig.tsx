// Pages
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import AllUsers from "../pages/users/AllUsers";
import Profile from "../pages/users/Profile";
import AllPolls from "../pages/polls/AllPolls";
import EditPoll from "../pages/polls/EditPoll";
import NewPoll from "../pages/polls/NewPoll";
import ShowPoll from "../pages/polls/ShowPoll";
// Components
import Layout from "../components/wrappers/Layout";
// Loaders
import { allUsersloader, allPollsLoader, profileLoader } from "./loaders";

export const routesConfig = [
  { element: <Layout/>, children: [
    { path: "/", children: [
      { 
        index: true,
        element: <Home/>
      },
      {
        path: "auth",
        children: [
          { 
            path: "signup",
            element: <Signup/> 
          },
          { 
            path: "login",
            element: <Login/> 
          }
        ]
      },
      {
        path: "users",
        children: [
          { 
            index: true,
            element: <AllUsers/>,
            loader: allUsersloader
          },
          { 
            path: ":userId",
            element: <Profile/>,
            loader: profileLoader
          }
        ]
      },
      {
        path: "polls",
        children: [
          { 
            index: true,
            element: <AllPolls/>,
            loader: allPollsLoader
          },
          { 
            path: "new",
            element: <NewPoll/> 
          },
          { 
            path: "edit",
            children: [
              { 
                path: ":postId",
                element: <EditPoll/>
              }
            ]
          },
          { 
            path: ":pollId",
            element: <ShowPoll/>,
          }
        ]
      }
    ]}
  ]}
];