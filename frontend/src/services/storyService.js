import api from "../api/axios";

export const getStories = async () => {

  const response = await api.get(
    "/stories"
  );

  return response.data;
};