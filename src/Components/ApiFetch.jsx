import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  projectId: "p7nvgrsg3fdf",
};
const ApiFetch = async (type) => {
  const url="https://academics.newtonschool.co/api/v1/ott/show?limit=100";
  try {
    const response = await axios.get(
      url,
      { headers: headers }
    );

    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
  }
};
export default ApiFetch;
