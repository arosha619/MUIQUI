/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MyBucket.css";
import SideBar from "../Sidebar/SideBar";
import { IoIosAddCircle } from "react-icons/io";

function MyBucket() {
  return (
    <div className="d-flex flex-xl-row flex-lg-row flex-md-row flex-column">
      <div>
        <SideBar />
      </div>
      <div className=" w-100" style={{ padding: "20px" }}>
        <div className="card">
          <div className="d-flex flex-xl-row flex-lg-row flex-md-row flex-column justify-content-between card-header align-items-center">
            <h5 className="">Buckets(7)</h5>
            <div
              className="d-flex d-inline-block search-box"
              style={{ border: "3px solid ", borderRadius: "10px"}}
            >
              <button className="btn btn-outline-light" type="submit">
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: "black" }}
                />
              </button>
              <input
                className="w-100 search-box-input "
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  borderWidth: "0",
                  backgroundColor: "rgba(255,0,0,0)",
                  paddingLeft: "10px",
                  outline: "none",
                
                }}
              />
            </div>
            <div className="dropdown" style={{ border: "3px solid ", borderRadius: "10px",outline:"none"}}>
                  <button
                    className="btn btn-light  dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu dropdown-menu-light">
                    <li>
                      <a className="dropdown-item " href="#">
                        Manager
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Employee
                      </a>
                    </li>
                  </ul>
                </div>
            { <button type="button" className="btn btn-outline-light"><IoIosAddCircle style={{color: 'green', fontSize: '50px'}}/></button> }
            
          </div>
          <div className="entire">

          <div>
          <div className="card-body d-flex row" style={{marginRight:"0px",marginLeft:"0px"}}>
            <div className="form-check col-1 d-flex align-items-center">
              <input
                style={{ scale: "2", marginLeft: "15px" }}
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>

            <div className="card-content col-11 " >
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div>
                <div className="dropdown ">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu dropdown-menu-light">
                    <li>
                      <a className="dropdown-item " href="#">
                        Manager
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Employee
                      </a>
                    </li>
                    
                  </ul>
                  
                </div>
              </div>
             
            </div>
            
          </div>
          <div className="row" style={{paddingLeft:"20px",paddingRight:"20px",marginRight:"0px",marginLeft:"0px"}}>
<hr/>
          </div>
          </div>

          <div>
          <div className="card-body d-flex row" style={{marginRight:"0px",marginLeft:"0px"}}>
            <div className="form-check col-1 d-flex align-items-center">
              <input
                style={{ scale: "2", marginLeft: "15px" }}
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>

            <div className="card-content col-11 " >
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div>
                <div className="dropdown ">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu dropdown-menu-light">
                    <li>
                      <a className="dropdown-item " href="#">
                        Manager
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Employee
                      </a>
                    </li>
                    
                  </ul>
                  
                </div>
              </div>
             
            </div>
            
          </div>
          <div className="row" style={{paddingLeft:"20px",paddingRight:"20px",marginRight:"0px",marginLeft:"0px"}}>
<hr/>
          </div>
          </div>


          <div>
          <div className="card-body d-flex row" style={{marginRight:"0px",marginLeft:"0px"}}>
            <div className="form-check col-1 d-flex align-items-center">
              <input
                style={{ scale: "2", marginLeft: "15px" }}
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>

            <div className="card-content col-11 " >
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div>
                <div className="dropdown ">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu dropdown-menu-light">
                    <li>
                      <a className="dropdown-item " href="#">
                        Manager
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Employee
                      </a>
                    </li>
                    
                  </ul>
                  
                </div>
              </div>
             
            </div>
            
          </div>
          <div className="row" style={{paddingLeft:"20px",paddingRight:"20px",marginRight:"0px",marginLeft:"0px"}}>
<hr/>
          </div>
          </div>


          <div>
          <div className="card-body d-flex row" style={{marginRight:"0px",marginLeft:"0px"}}>
            <div className="form-check col-1 d-flex align-items-center">
              <input
                style={{ scale: "2", marginLeft: "15px" }}
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>

            <div className="card-content col-11 " >
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div>
                <div className="dropdown ">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu dropdown-menu-light">
                    <li>
                      <a className="dropdown-item " href="#">
                        Manager
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Employee
                      </a>
                    </li>
                    
                  </ul>
                  
                </div>
              </div>
             
            </div>
            
          </div>
          <div className="row" style={{paddingLeft:"20px",paddingRight:"20px",marginRight:"0px",marginLeft:"0px"}}>
<hr/>
          </div>
          </div>


          <div>
          <div className="card-body d-flex row" style={{marginRight:"0px",marginLeft:"0px"}}>
            <div className="form-check col-1 d-flex align-items-center">
              <input
                style={{ scale: "2", marginLeft: "15px" }}
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>

            <div className="card-content col-11 " >
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div>
                <div className="dropdown ">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu dropdown-menu-light">
                    <li>
                      <a className="dropdown-item " href="#">
                        Manager
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Employee
                      </a>
                    </li>
                    
                  </ul>
                  
                </div>
              </div>
             
            </div>
            
          </div>
          <div className="row" style={{paddingLeft:"20px",paddingRight:"20px",marginRight:"0px",marginLeft:"0px"}}>
<hr/>
          </div>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBucket;
