import axios from "axios";
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjQsImFkbWluX25hbWUiOiJzYWppdGgiLCJlbWFpbCI6InNhaml0aHRoaWxhbmdhOTRAZ21haWwuY29tIiwic3RhdHVzIjoiQURNSU4ifSwiaWF0IjoxNjc3MjU1MzI0MjYxLCJleHAiOjE2NzcyNTY1MzM4NjF9.SDG0zFeP2BuyPc5v1-1meoJjIryKO2YKzp4DKHPfda8"
export const registerAPI = axios.create({
    baseURL: "http://ec2-3-128-189-68.us-east-2.compute.amazonaws.com:8000/",
    timeout: 30000,
    headers: {
        "Access-Control-Allow-Origin": "*",
         Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  export const ImageAPI = axios.create({
    baseURL: "http://ec2-3-128-189-68.us-east-2.compute.amazonaws.com:8000/"
  });
  export const API = axios.create({
    baseURL: "http://ec2-3-128-189-68.us-east-2.compute.amazonaws.com:8000/"
  });
  export const createAdmin = async (formData) => {
    const res = await ImageAPI.post(`admin/register`, formData);
    return res;
  };
  export const getAllUsers = async () => {
    const res = await registerAPI.get(`user/getAllUser`);
    return res;
  };