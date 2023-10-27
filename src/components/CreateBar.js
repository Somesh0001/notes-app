import React from "react";
import { useState } from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ImageIcon from "@mui/icons-material/Image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
// mmll
import BackPicker from "./BackPicker";
import ExpandIcon from "./Moreicon";
import Reminder from "./Reminder";
import SnackBar from "./SnackBar";
//
import Tooltip from "@mui/material/Tooltip";
//
import styled from "styled-components";
import { useEffect, useRef } from "react";
function CreateBar() {
  const [backColor, setBackColor] = useState("white");
  const Button = styled.button`
    background-color: tranparent;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;

    &:hover {
      background-color: #d6dcd5;
      opacity: 1;
    }
  `;

  const DoneBtn = styled.button`
    background-color: green;
    color: white;
    padding: 1em;
    border: none;
    border-radius: 1em;
    cursor: pointer;
    opacity: 0.8;
    transition: background-color 0.3s ease;
    &:hover {
      opacity: 1;
    }
  `;

  const [click, setClick] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const Icon = styled.i`
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  `;
  const ToggleableIcon = ({ icon }) => {
    const handleClick = () => {
      setIsActive(!isActive);
    };

    return (
      <Icon onClick={handleClick} isActive={isActive}>
        {icon}
      </Icon>
    );
  };
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click(); // Trigger file input click when IconButton is clicked
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Handle the selected file, e.g., upload it to the server or display it
  };

  return (
    <>
      <div
        onMouseEnter={() => {
          setClick(true);
        }}
        onMouseLeave={() => {
          setClick(false);
        }}
        onClick={() => {
          setClick(true);
        }}
        style={{
          width: "100%",
          maxWidth: "50vw",
          padding: "0em 0em 1em 0em ",
          margin: "auto",
          marginTop: "2em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          border: "1px solid #ccc",
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
          backgroundColor: backColor,
        }}
      >
        <div
          style={{
            paddingTop: "1em",
            paddingRight: "1em",
            width: "100%",
            display: "flex",
            justifyContent: "right",
            marginRight: "20px",

            marginBottom: "0px",
          }}
        >
          <ToggleableIcon icon={<PushPinIcon />} />
        </div>

        <input
          type="text"
          style={{
            width: "90%",
            maxWidth: "50vw",
            height: "fit-content",
            borderRadius: "10px",
            margin: "0px 10px 0px 10px", //top right bottom left
            border: "0.1px solid black",
            outline: "none",
            minHeight: "2em",
            padding: "5px",
          }}
          placeholder={click === true ? "Enter Title" : "Add a note..."}
        />
        <textarea
          rows="5"
          cols="50"
          placeholder="Enter note"
          style={{
            width: "90%",
            maxWidth: "50vw",
            height: "fit-content",
            borderRadius: "10px",
            fontSize: "1em",
            minHeight: "2em",
            display: click === true ? "block" : "none",
          }}
        />
        <div
          style={{
            display: click === true ? "flex" : "none",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "10px 10px 0px 10px",
            padding: "0px",
            maxWidth: "50vw",
            width: "90%",
          }}
        >
          <Tooltip title={"Remind Me"} arrow>
            <Reminder icon={<AddAlertIcon />} />
          </Tooltip>
          <Tooltip title={"Collaborator"} arrow>
            <IconButton style={{ color: "yellow" }}>
              <FolderSharedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Background Options"} arrow>
            <BackPicker icon={<ColorLensIcon />} setColor={setBackColor} />{" "}
          </Tooltip>
          <Tooltip title={"Add Image"} arrow>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={handleUploadButtonClick}
            >
              <ImageIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Archive"} arrow>
            <IconButton style={{ color: "green" }}>
              <SnackBar />
            </IconButton>
          </Tooltip>
          <Tooltip title={"More"} arrow>
            <ExpandIcon icon={<MoreVertIcon />} />
          </Tooltip>
        </div>
        <div
          style={{
            right: "1em",
            width: "100%",
            display: click === true ? "flex" : "none",
            justifyContent: "right",
            margin: "2% 10% 0px  0px",
            padding: "4px",
          }}
        >
          <DoneBtn>Done</DoneBtn>
        </div>
      </div>
    </>
  );
}

export default CreateBar;
