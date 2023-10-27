import React from "react";
import ArchiveNote from "../components/ArchiveNotes";
function Archived() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
       
      }}
    >
      <h1>Archieves</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "80vw",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",

          boxSizing: "border-box",
        }}
      >
        <ArchiveNote />
        <ArchiveNote />
      </div>
    </div>
  );
}

export default Archived;
