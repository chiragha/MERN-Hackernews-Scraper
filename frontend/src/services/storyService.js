import api from "../api/axios";

export const getStories = async () => {

  try {

    const response = await api.get("/stories");

    return response.data;

  } catch (error) {

    console.log(error);

    throw error;
  }
};