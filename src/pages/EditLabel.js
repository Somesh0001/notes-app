import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import LabelIcon from "@mui/icons-material/Label";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";
import { useState } from "react";
function EditLabel() {
  const [isentered, setIsEntered] = useState(false);
  return (
    <>
      <div style={{ minHeight: "100vh", backgroundColor: " #97dbca" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "25vw",
            margin: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            fontSize: "2em",
            transform: "translate(-50%, -50%)",
            border: "1px solid black",
            paddingBottom: "20px",
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            <div style={{ fontWeight: "bold" }}>Edit Labels</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                minHeight: "2em",
                border: "1px solid black",
              }}
            >
              <Tooltip title={"Cancel"}>
                <IconButton>
                  <CloseIcon />
                </IconButton>{" "}
              </Tooltip>
              <input
                type="text"
                placeholder="Enter new label name..."
                style={{ border: "1px solid black" }}
              />{" "}
              <Tooltip title="Done">
                <IconButton>
                  {" "}
                  <DoneIcon />{" "}
                </IconButton>
              </Tooltip>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                minHeight: "2em",
                border: "1px solid black",
              }}
              onClick={() => {
                setIsEntered(true);
              }}
              onMouseLeave={() => {
                setIsEntered(false);
              }}
              onMouseEnter={() => {
                setIsEntered(true);
              }}
            >
              <Tooltip title={"Label"}>
                <IconButton>
                  {isentered ? <DeleteIcon /> : <LabelIcon />}
                </IconButton>
              </Tooltip>
              <input
                type="text"
                name=""
                id=""
                style={{ border: "1px solid black" }}
              />
              <Tooltip title="Create">
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              position: "relative",
              padding: "10px",
              marginLeft: "auto",
              float: "right",
            }}
          >
            <button
              style={{
                padding: "10px 10px",
                borderRadius: "2px",
                backgroundColor: "white",
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                cursor: "pointer",
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditLabel;
