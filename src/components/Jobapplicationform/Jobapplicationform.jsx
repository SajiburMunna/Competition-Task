import React, { useState } from "react";
import "./Jobapplicationform.css";
import TextField from "@mui/material/TextField";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Footer from "../Footer/Footer";
import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
import ExplicitOutlinedIcon from "@mui/icons-material/ExplicitOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const Jobapplicationform = () => {
  const applyInfo = [
    {
      name: "Name",
    },
    {
      name: "Email",
    },
    {
      name: "Phone",
    },
    {
      name: "Address",
    },
    {
      name: "Education",
    },
    {
      name: "Resume",
    },
    {
      name: "Years of Experiences",
    },
    {
      name: "Expected Salay",
    },
    {
      name: "Notice Pried",
    },
  ];
  const [add, setAdd] = useState(false);
  return (
    <>
      <div className="jobapplicationform">
        <div style={{ padding: "20px", marginTop: "30px" }}>
          <span>Job Application Form</span>
        </div>
        <small style={{ margin: "20px" }}>
          Candidates are required to apply with this application
        </small>
        <div className="info-div">
          {applyInfo.map((info) => (
            <div>
              <div className="info">
                {info.name === "Name" ? (
                  <PersonIcon />
                ) : info.name === "Email" ? (
                  <EmailOutlinedIcon />
                ) : info.name === "Phone" ? (
                  <LocalPhoneOutlinedIcon />
                ) : info.name === "Address" ? (
                  <HomeOutlinedIcon />
                ) : info.name === "Education" ? (
                  <CastForEducationOutlinedIcon />
                ) : info.name === "Resume" ? (
                  <FilePresentOutlinedIcon />
                ) : info.name === "Years of Experiences" ? (
                  <ExplicitOutlinedIcon />
                ) : info.name === "Expected Salay" ? (
                  <MonetizationOnOutlinedIcon />
                ) : info.name === "Notice Pried" ? (
                  <AccessTimeOutlinedIcon />
                ) : null}
                <span>{info.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", margin: "20px" }}>
          <span>Additional Information</span>

          <hr className="dotted"></hr>
        </div>
        <div style={{ display: "flex", margin: "20px" }}>
          <div style={{ marginTop: "25px" }}>
            <input type="checkbox" id="myCheck"></input>
          </div>

          <div className="label">
            <div>
              <TextField
                style={{ width: "400px" }}
                id="filled-basic"
                label="label"
                variant="filled"
              />
            </div>
            <div
              style={{ marginTop: "15px", marginLeft: "5px", display: "flex" }}
            >
              <span>T</span>
              <div>
                <select style={{ border: "none" }} name="topic" id="topic">
                  <option value="" selected="selected">
                    Text
                  </option>
                </select>
              </div>
              <div>
                <FileCopyIcon style={{ color: "#666666" }} />
              </div>
              <div>
                <DeleteIcon style={{ color: "#666666" }} />
              </div>
            </div>
          </div>
          <div>
            <AddCircleIcon
              onClick={() => setAdd(true)}
              style={{ color: "#34A853", marginTop: "20px", fontSize: "40px" }}
            />
          </div>
        </div>

        {add ? (
          <div style={{ display: "flex", margin: "20px" }}>
            <div style={{ marginTop: "25px" }}>
              <input type="checkbox" id="myCheck"></input>
            </div>

            <div className="label">
              <div>
                <TextField
                  style={{ width: "400px" }}
                  id="filled-basic"
                  label="label"
                  variant="filled"
                />
              </div>
              <div
                style={{
                  marginTop: "15px",
                  marginLeft: "5px",
                  display: "flex",
                }}
              >
                <span>T</span>
                <div>
                  <select style={{ border: "none" }} name="topic" id="topic">
                    <option value="" selected="selected">
                      Text
                    </option>
                  </select>
                </div>
                <div>
                  <FileCopyIcon style={{ color: "#666666" }} />
                </div>
                <div>
                  <DeleteIcon
                    onClick={() => setAdd(false)}
                    style={{ color: "#666666" }}
                  />
                </div>
              </div>
            </div>
            <div>
              <AddCircleIcon
                style={{
                  color: "#34A853",
                  marginTop: "20px",
                  fontSize: "40px",
                }}
              />
            </div>
          </div>
        ) : null}
        <br />
        <br />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Jobapplicationform;
