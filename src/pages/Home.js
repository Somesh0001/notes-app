import React from "react";
import CreateBar from "../components/CreateBar";
import Note from "../components/Note";
function Home() {
  const text =
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, at officiis neque reprehenderit distinctio illo pariatur placeat aspernatur tenetur deleniti expedita? Adipisci esse iure ea quae maiores explicabo alias. Fugiat ut est inventore, quibusdam dolor harum odio repudiandae assumenda accusantium!";

  return (
    <>
      <CreateBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "80vw",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          padding: "auto",
        }}
      >
        <h1>MyNotes</h1>
        <div
          style={{
            width: "80vw",
            margin: "auto",
            textAlign: "center",
            height: "auto",
            backgroundColor: "#fff",
            marginTop: "1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Note text={text} />
        </div>
      </div>
    </>
  );
}

export default Home;
