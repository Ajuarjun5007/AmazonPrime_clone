import axios from "axios";
const url = "https://academics.newtonschool.co/api/v1/"
const headers = {
  "Content-Type": "application/json",
  projectId: "p7nvgrsg3fdf",
};
const movieList = async (type) => {
  const suffix=url+"ott/show?limit=100";
  try {
    const response = await axios.get(
      suffix,
      { headers: headers }
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
    const response = await axios.get(
      suffix,
      { headers: headers }
    );

    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
  }
};
export  {movieList, movieDetail};
