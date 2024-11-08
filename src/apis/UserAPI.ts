import { api, baseURL } from "./configs/axiosConfig";

const UserAPI = {
  //----- Retrieve users
  getAll: async () => {
    const res = await api.request({
      method: "GET",
      url: "/api/users",
      baseURL
    });

    return res;
  },
  
  //----- Create user
  create: async (username: string, password: string) => {
    const res = await api.request({
      method: "POST",
      data: {
        username,
        password
      },
      url: "/api/users",
      baseURL
    });

    return res;
  }
};

export default UserAPI;