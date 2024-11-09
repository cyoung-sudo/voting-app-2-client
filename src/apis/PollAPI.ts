import { api, baseURL } from "./configs/axiosConfig";

const PollAPI = {
  //----- Retrieve polls
  getAll: async () => {
    const res = await api.request({
      method: "GET",
      url: "/api/polls",
      baseURL
    });

    return res;
  },
  
  //----- Create poll
  create: async (title: string, desc: string, choices: string) => {
    const res = await api.request({
      method: "POST",
      data: {
        title,
        desc,
        choices
      },
      url: "/api/polls",
      baseURL
    });

    return res;
  },

  //----- Retrieve polls for given user
  getForUser: async (userId: string) => {
    const res = await api.request({
      method: "GET",
      url: `/api/polls/user/${userId}`,
      baseURL
    });

    return res;
  }
};

export default PollAPI;