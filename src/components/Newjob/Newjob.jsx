import React from "react";

import Jobapplicationform from "../Jobapplicationform/Jobapplicationform";
import "./Newjob.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const Newjob = () => {
  return (
    <div>
      <div className="content-div">
        <div className="create-title-div">
          <p>Create New Job</p>
          <p style={{ marginLeft: "1060px" }}> 𐤕</p>
        </div>

        <div className="create-info-div">
          <div className="cont">
            <hr className="solid" />
            <div className="create-info-content">
              <CircleOutlinedIcon className="info-icon" />
              <span>Basic Information</span>
            </div>
          </div>
          <div div className="cont">
            <hr className="solid" />
            <div className="create-info-content">
              <CircleOutlinedIcon className="info-icon" />
              <span>Job Summary</span>
            </div>
          </div>
          <div div className="cont">
            <hr className="solid3" />
            <div className="create-info-content">
              <CircleOutlinedIcon className="job-application-info" />
              <span>Job Application Form</span>
            </div>
          </div>
          <div div className="cont">
            <hr className="solid4" />
            <div className="create-info-content">
              <CircleOutlinedIcon className="interview-pipe-line" />
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
