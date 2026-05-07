import api from "../api/axios";

export const getStories = async (page = 1) => {

  const response = await api.get(
    `/stories?page=${page}&limit=10`
  );

  return response.data;
};