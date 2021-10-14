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
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
        <div className="jobapplicaton-title-div">
          <span>Job Application Form</span>
        </div>
        <small className="candidates-title">
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
        <div className="additional-info-title">
          <span>Additional Information</span>

          <hr className="dotted"></hr>
        </div>
        <div className="additional-info-content-div">
          <div style={{ marginTop: "25px" }}>
            <Checkbox {...label} defaultChecked color="success" />
          </div>

          <div className="label">
            <div>
              <TextField
                className="text-field"
                id="filled-basic"
                label="label"
                variant="filled"
                color="success"
              />
            </div>
            <div className="text-field-button-div">
              <span>T</span>
              <div>
                <select style={{ border: "none" }} name="topic" id="topic">
                  <option value="" selected="selected">
                    Text
                  </option>
                </select>
              </div>
              <div>
                <FileCopyIcon className="icon-color" />
              </div>
              <div>
                <DeleteIcon className="icon-color" />
              </div>
            </div>
          </div>
          <div>
            <AddCircleIcon
              onClick={() => setAdd(true)}
              className="add-button"
              style={{ fontSize: "30px" }}
            />
          </div>
        </div>

        {add ? (
          <div className="additional-info-content-div">
            <div style={{ marginTop: "25px" }}>
              <Checkbox {...label} defaultChecked color="success" />
            </div>

            <div className="label">
              <div>
                <TextField
                  className="text-field"
                  id="filled-basic"
                  label="label"
                  variant="filled"
                  color="success"
                />
              </div>
              <div className="text-field-button-div">
                <span>T</span>
                <div>
                  <select style={{ border: "none" }} name="topic" id="topic">
                    <option value="" selected="selected">
                      Text
                    </option>
                  </select>
                </div>
                <div>
                  <FileCopyIcon className="icon-color" />
                </div>
                <div>
                  <DeleteIcon
                    onClick={() => setAdd(false)}
                    className="icon-color"
                  />
                </div>
              </div>
            </div>
            <div>
              <AddCircleIcon
                style={{ fontSize: "30px" }}
                className="add-button"
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
