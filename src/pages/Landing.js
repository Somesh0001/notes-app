import React from "react";
import back from "../assets/back7.jpg";
import { Link } from "react-router-dom";
import Registration from "../components/Registration";
import { useState } from "react";
function Landing() {
  const [register, setRegister] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center ",
          justifyContent: "center",
          flexDirection: "column",
          backgroundAttachment: "fixed",
        }}
      >
        {/* font-family: 'Caveat', cursive;
font-family: 'DM Serif Display', serif; */}
        <div
          style={{
            fontSize: "5em",
            fontWeight: "bold",
            fontFamily: "'DM Serif Display', serif",
          }}
        >
          MyNotes
        </div>
        <div style={{ fontSize: "3em", fontFamily: "'Caveat', cursive" }}>
          "Unleash Your Ideas, Organize Your Thoughts, MyNotes – Where Every
          Idea Finds Its Place."{" "}
        </div>
        <div>
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              margin: "1em auto auto auto",
            }}
            onClick={() => setRegister(true)}
          >
            Try Now!!
          </button>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50% , -50%)",
          display: register ? "block" : "none",
        }}
      >
        <Registration />
      </div>
    </>
  );
}

export default Landing;
