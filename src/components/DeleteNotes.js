// Here we will be creating a deleted notes card
import React from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import RestoreIcon from "@mui/icons-material/Restore";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ImageIcon from "@mui/icons-material/Image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArchiveIcon from "@mui/icons-material/Archive";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Tooltip from "@mui/material/Tooltip";
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam iste corporis sapiente quaerat laudantium nostrum neque odit, quisquam aperiam qui repellat unde optio! Quod corrupti quidem nulla soluta, dolor, mollitia ad corporis fugiat ullam quam iusto non iste officiis?";

const Note = () => {
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
    <>
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
          backgroundColor: "white",
          position: "relative",
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
            opacity: "0.6",
          }}
        >
          <ToggleableIcon icon={<PushPinIcon />} />
        </div>
        <div
          style={{
            maxHeight: 200,
            width: "200px",
            opacity: "0.6",
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
            opacity: "0.6",
          }}
        >
          <Tooltip title={"Remind Me"} arrow>
            <AddAlertIcon />
          </Tooltip>
          <Tooltip title={"Collaborator"} arrow>
            {/* <IconButton style={{ color: "yellow" }}> */}
            <FolderSharedIcon />
            {/* </IconButton> */}
          </Tooltip>
          <Tooltip title={"Background Options"} arrow>
            <ColorLensIcon />
          </Tooltip>
          <Tooltip title={"Add Image"} arrow>
            <ImageIcon />
          </Tooltip>
          <Tooltip title={"Archive"} arrow>
            <ArchiveIcon />
          </Tooltip>
          <Tooltip title={"More"} arrow>
            <MoreVertIcon />
          </Tooltip>
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "red",
            color: "white",
            top: "40%",
            left: "0px",
            fontWeight: "bold",
            fontSize: "2em",
          }}
        >
          DELETED
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            borderRadius: "10px",
            color: "white",
            left: "0px",
            top: "50%",
            fontWeight: "bold",
            marginTop: "1em",
            borderRadius: "10px",
            fontSize: "1em",
          }}
        >
          <button
            style={{
              backgroundColor: "green",
              width: "50%",
              cursor: "pointer",
              border: "none",
              borderRadius: "10px",
            }}
          >
            <Tooltip title={"Restore"}>
              <RestoreIcon style={{ color: "white" }} />
            </Tooltip>
          </button>
          <button
            style={{
              backgroundColor: "darkred",
              width: "50%",
              cursor: "pointer",
              border: "none",
              borderRadius: "10px",
            }}
          >
            <Tooltip title={"Delete permanently"}>
              {" "}
              <DeleteForeverIcon style={{ color: "white" }} />
            </Tooltip>
          </button>
        </div>
      </div>
    </>
  );
};

export default Note;
