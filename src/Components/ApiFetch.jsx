import axios from "axios";
const url = "https://academics.newtonschool.co/api/v1/"
export const headers = {
  "Content-Type": "application/json",
  projectId: "p7nvgrsg3fdf",
};
const instance = axios.create({
  baseURL: url,
  // timeout: 5000,
  headers
});
const movieList = async (type) => {
  const suffix=url+"ott/show?limit=100";
  try {
    const response = await instance.get(
      suffix,
    );

    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
  }
};
const movieDetail = async (id) => {
  const suffix=url+"ott/show/"+id;
  try {
    const response = await instance.get(
      suffix,
    );

    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
  }
};


export  {movieList, movieDetail,instance};
