import React from "react";

import Jobapplicationform from "../Jobapplicationform/Jobapplicationform";
import "./Newjob.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const Newjob = () => {
  return (
    <div>
      <div className="content-div">
        <div style={{ display: "flex", marginLeft: "20px" }}>
          <div>
            <p>Create New Job</p>
          </div>
          <div style={{ marginLeft: "941px" }}>
            <p> 𐤕</p>
          </div>
        </div>

        <div style={{ display: "flex", marginLeft: "20px" }}>
          <div>
            <hr className="solid" />
            <div style={{ display: "flex" }}>
              <CircleOutlinedIcon
                style={{ fontSize: "20px", color: "#34A853" }}
              />
              <span>Basic Information</span>
            </div>
          </div>
          <div>
            <hr className="solid" />
            <div style={{ display: "flex" }}>
              <CircleOutlinedIcon
                style={{ fontSize: "20px", color: "#34A853" }}
              />
              <span>Job Summary</span>
            </div>
          </div>
          <div>
            <hr className="solid3" />
            <div style={{ display: "flex" }}>
              <CircleOutlinedIcon
                style={{ fontSize: "20px", color: "#FCBD06" }}
              />
              <span>Job Application Form</span>
            </div>
          </div>
          <div>
            <hr className="solid4" />
            <div style={{ display: "flex" }}>
              <CircleOutlinedIcon
                style={{ fontSize: "20px", color: " rgba(0, 0, 0, 0.12)" }}
              />
              <span>Interview Pipeline</span>
            </div>
          </div>
        </div>
        <Jobapplicationform></Jobapplicationform>
      </div>
    </div>
  );
};

export default Newjob;
