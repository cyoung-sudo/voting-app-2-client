// APIs
import UserAPI from "../apis/UserAPI"

export const allUsersloader = async () => {
  const res = await UserAPI.getAll();
  return res.data.users;
}