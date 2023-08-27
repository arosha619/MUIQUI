import axios from "axios";
export const registerAPI = axios.create({
    baseURL: "http://ec2-3-128-189-68.us-east-2.compute.amazonaws.com:8000/",
    timeout: 30000,
    headers: {
      //   "Access-Control-Allow-Origin": "*",
      //    Authorization: `Bearer ${token}`,
    //   "Content-type": "application/json",
    },
  });
  export const ImageAPI = axios.create({
    baseURL: "http://ec2-3-128-189-68.us-east-2.compute.amazonaws.com:8000/"
  });
  export const createAdmin = async (formData) => {
    const res = await ImageAPI.post(`admin/register`, formData);
    return res;
  };