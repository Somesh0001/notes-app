import React from "react";
import { useState } from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ImageIcon from "@mui/icons-material/Image";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styled from "styled-components";
function CreateBar() {
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
          placeholder="Enter Title"
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
            justifyContent: "space-between",
            margin: "10px 10px 0px 10px",
            padding: "0px",
            maxWidth: "50vw",
            width: "90%",
          }}
        >
          <Button>
            <AddAlertIcon />
          </Button>
          <Button>
            <FolderSharedIcon />
          </Button>
          <Button>
            <ColorLensIcon />
          </Button>
          <Button>
            <ImageIcon />
          </Button>
          <Button>
            <ArchiveIcon />
          </Button>
          <Button>
            <MoreVertIcon />
          </Button>
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
