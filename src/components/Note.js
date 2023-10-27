import React from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import IconButton from "@mui/material/IconButton";
// mmll
import AddAlertIcon from "@mui/icons-material/AddAlert";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ImageIcon from "@mui/icons-material/Image";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
//
import BackPicker from "./BackPicker";
import ExpandIcon from "./Moreicon";
import Reminder from "./Reminder";
import SnackBar from "./SnackBar"
//
import Tooltip from "@mui/material/Tooltip";
//
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const Note = ({ text }) => {
  const [backColor, setBackColor] = useState("white");
  const myDiv = useRef(null);
  useEffect(() => {
    console.log(backColor);
    myDiv.current.style.backgroundColor = backColor;
  }, [backColor]);

  const TextComponent = ({ text }) => {
    const truncatedText = text.length > 200 ? `${text.slice(0, 200)}...` : text;
    return <div className="text-container">{truncatedText}</div>;
  };

  const Icon = styled.i`
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  `;

  const ToggleableIcon = ({ icon }) => {
    const [isActive, setIsActive] = useState(false);
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
    <div
      ref={myDiv}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "12px",
        boxShadow:
          "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
        width: "240px",
        maxHeight: "340px",
        color: "black",
        backgroundColor: { backColor },
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          position: "relative",
          right: "2px",
          height: "auto",
          marginTop: "1em",
        }}
      >
        <ToggleableIcon icon={<PushPinIcon />} />
      </div>
      <div
        style={{
          maxHeight: 200,
          width: "200px",
        }}
      >
        <TextComponent text={text} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "200px",
          color: "black",
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
    </div>
  );
};

export default Note;
