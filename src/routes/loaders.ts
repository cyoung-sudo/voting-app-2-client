// Routing
import { LoaderFunctionArgs } from "react-router-dom";
// APIs
import UserAPI from "../apis/UserAPI"
import PollAPI from "../apis/PollAPI";

export const allUsersloader = async () => {
  const res = await UserAPI.getAll();
  return res.data.users;
}

export const allPollsLoader = async () => {
  const res = await PollAPI.getAll();
  return res.data.polls;
}

export const profileLoader = async ({params}: LoaderFunctionArgs) => {
  if(params.userId) {
    const [res1, res2] = await Promise.all([
      UserAPI.getUser(params.userId),
      PollAPI.getForUser(params.userId)
    ]);

    return {
      user: res1.data.user,
      userPolls: res2.data.polls
    };
  }
}

export const showPollLoader = async ({params}: LoaderFunctionArgs) => {
  if(params.pollId) {
    const [res1, res2] = await Promise.all([
      PollAPI.getPoll(params.pollId),
      PollAPI.getVote(params.pollId)
    ]);

    // Authenticated
    if(res2.data.success) {
      return {
        poll: res1.data.poll,
        voted: res2.data.voted
      };
    // Not authenticated
    } else {
      return {
        poll: res1.data.poll,
        voted: null
      };
    }
  }
}