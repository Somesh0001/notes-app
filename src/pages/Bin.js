import React from "react";
import DeleteNotes from "../components/DeleteNotes";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function Bin() {
  return (
    <>
      <div style={{ margin: "1em" }}>
        All the notes will be deleted after 7 days
      </div>
      <hr />
      <div style={{ backgroundColor: "#F44336", color: "white" }}>
        1 day remaining
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          margin: "1em 5em",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DeleteNotes />
        <DeleteNotes />
      </div>
      <div style={{ backgroundColor: "#F44336", color: "white" }}>
        2 days remaining
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          margin: "1em 5em",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DeleteNotes />
      </div>
      <div style={{ backgroundColor: "#F44336", color: "white" }}>
        3 days remaining
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          margin: "1em 5em",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DeleteNotes />
      </div>
      <div style={{ backgroundColor: "#F44336", color: "white" }}>
        4 days remaining
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          margin: "1em 5em",
          flexWrap: "wrap",
          gap: "10px",
        }}
      ></div>
      <div style={{ backgroundColor: "#F44336", color: "white" }}>
        5 days remaining
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          margin: "1em 5em",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DeleteNotes />
        <DeleteNotes />
      </div>
      <div style={{ backgroundColor: "#F44336", color: "white" }}>
        6 days remaining
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          margin: "1em 5em",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DeleteNotes />
      </div>
    </>
  );
}

export default Bin;
