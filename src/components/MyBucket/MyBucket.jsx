import React from 'react'
import "./MyBucket.css"
import { useNavigate } from "react-router-dom";

function MyBucket() {

  const navigate = useNavigate();
  var isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    alert("Need to login first");
    navigate("/");
  }

  return (
    <div className='b-container'>MyBucket</div>
  )
}

export default MyBucket