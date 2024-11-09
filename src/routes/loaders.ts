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