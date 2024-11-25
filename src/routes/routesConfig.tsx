// Pages
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import AllUsers from "../pages/users/AllUsers";
import Profile from "../pages/users/Profile";
import AllPolls from "../pages/polls/AllPolls";
import NewPoll from "../pages/polls/NewPoll";
import ShowPoll from "../pages/polls/ShowPoll";
// Components
import Layout from "../components/wrappers/Layout";
import PrivateRoute from "../components/wrappers/PrivateRoute";
// Loaders
import { allUsersloader, allPollsLoader, profileLoader, showPollLoader } from "./loaders";

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
          },
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
          { element: <PrivateRoute/>, children: [
            { 
              path: "new",
              element: <NewPoll/> 
            }
          ]},
          { 
            path: ":pollId",
            element: <ShowPoll/>,
            loader: showPollLoader
          }
        ]
      }
    ]}
  ]}
];