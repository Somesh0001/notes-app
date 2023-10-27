import React from "react";
import Note from "./Note";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
function ArchiveNote() {
  const [isHover, setIsHover] = useState(false);
  const text =
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, at officiis neque reprehenderit distinctio illo pariatur placeat aspernatur tenetur deleniti expedita? Adipisci esse iure ea quae maiores explicabo alias. Fugiat ut est inventore, quibusdam dolor harum odio repudiandae assumenda accusantium!";
  return (
    <>
      <div
        style={{
          margin: "10px",
          textAlign: "center",
          height: "auto",
          backgroundColor: "#fff",
          marginTop: "1em",
          display: "flex",
          justifyContent: "left",
          alignItems: "left",

          position: "relative",
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div style={{ opacity: "0.6" }}>
          {" "}
          <Note text={text} />
        </div>
        <Tooltip title={"Unarchive"}>
          <button
            style={{
              position: "relative",
              right: "4em",
              top: "4em",
              color: "black",
              maxHeight: "1em",
              fontWeight: "bold   ",
              fontSize: "2em",
              border: "1px solid green",
              borderRadius: "10px",
              cursor: "pointer",
              backgroundColor: "green",
              opacity: isHover ? "1" : "0",
            }}
            onMouseEnter={() => setIsHover(true)}
          >
            <UnarchiveIcon />
          </button>
        </Tooltip>
      </div>
    </>
  );
}

export default ArchiveNote;
