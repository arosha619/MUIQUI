import React, { useState,useEffect } from "react";
import "./UserList.css";
import pic from "../../Assets/person_one.jpg";
import pic2 from "../../Assets/person_two.jpg";
import logo from "../../Assets/micqui_logo.jpg";
import {getAllUsers} from "../../API/axios"

// const data = [
//  { id: 1,
//   image: pic,
//   name: "John Doe",
//   email: "john@example.com",
//   phone: "123-456-7890",
//   position: "Developer",
//   status: "Active",
//   selected: false,
// },
// {
//   id: 2,
//   image:pic2,
//   name: "Jane Smith",
//   email: "jane@example.com",
//   phone: "987-654-3210",
//   position: "Designer",
//   status: "Inactive",
//   selected: false,
// },
// {
//   id: 1,
//   image: pic,
//   name: "amal",
//   email: "amal@example.com",
//   phone: "123-456-7890",
//   position: "Developer",
//   status: "Active",
//   selected: false,
// },
// {
//   id: 1,
//   image: pic,
//   name: "John Doe",
//   email: "john@example.com",
//   phone: "123-456-7890",
//   position: "Developer",
//   status: "Active",
//   selected: false,
// },
  
// ];

const UserList = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUserData(usersData.data.data);
        setFilteredData(usersData.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);
  

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    // Logic to select/deselect all rows
    const updatedData = filteredData.map((item) => ({
      ...item,
      selected: !selectAll,
    }));
    setFilteredData(updatedData);
  };

  const handleCheckboxChange = (index) => {
    // Logic to handle individual checkbox changes
    const updatedData = [...filteredData];
    updatedData[index].selected = !updatedData[index].selected;
    setFilteredData(updatedData);
  };

  const handleSearch = (searchTerm) => {
    // Logic to filter data based on searchTerm
    const filtered = userData.filter((item) =>
      item.full_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="user-list-container">
      <header className="page-header">
        <img src={logo} alt="Logo" className="logo" />
        <h2> MICQUI</h2>
        <h1>User List</h1>
      </header>
      <form className="nosubmit">
        <input
          className="nosubmit"
          type="search"
          placeholder="Search By Name..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
      <div className="table-container" >
        <table className="custom-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                Select All
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Position</th>
              <th>Status</th>
            </tr>
          </thead>
         
          <tbody >
          
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td>
                  <img id="image" src={item.profile_pic} alt="image" />
                </td>
                <td>{item.full_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.role}</td>
                <td>{item.is_verified === 1 ? 'Verified' : 'Not Verified'}</td>
              </tr>
            ))}
            
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default UserList;