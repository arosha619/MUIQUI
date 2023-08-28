import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import UserList from "./components/UserList/UserList";
import MyBucket from "./components/MyBucket/MyBucket";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  return (
    // <Router>

    // {authenticated ?
    //    <SideBar>
    //     <Routes>
    //       <Route path="/home" element={<Dashboard />} />
    //       <Route path="/user-list" element={<UserList />} />
    //       <Route path="/my-buckets" element={<MyBucket />} />
    //       <Route path="/settings" element={<Setting />} />

    //     </Routes>
    //     </SideBar>

    //   :(<Routes>
    //   <Route path="/" element={<Login setAuthenticated={setAuthenticated}/>} />
    //   <Route path="/sign-up" element={<SignUp/>} />
    //   </Routes>)}
    // </Router>
    // <SideBar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/home" element={<Dashboard />} /> */}
        <Route path="/user-list" element={<UserList />} />
        <Route path="/my-buckets" element={<MyBucket />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    // </SideBar>
  );
}

export default App;
