import React from "react";
import CreateBar from "../components/CreateBar";
import LabelNote from "../components/LabelNotes";
function Labels() {
  return (
    <>
      <CreateBar />
      <h1>Labelled Notes</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          width: "80%",
          margin: "auto",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "2em",
        }}
      >
        <LabelNote label={"Work"} />
        <LabelNote label={"Work"} />
        <LabelNote label={"Travel"} />
        <LabelNote label={"Health"} />
        <LabelNote label={"Home"} />
        <LabelNote label={"Home"} />
        <LabelNote label={"Home"} />
      </div>
    </>
  );
}

export default Labels;
