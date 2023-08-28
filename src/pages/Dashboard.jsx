import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  var isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    alert("Need to login first");
    navigate("/");
  }

  return <div className="title"> Dashboard</div>;
};

export default Dashboard;
