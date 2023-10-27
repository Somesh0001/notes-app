import React from "react";
import CreateBar from "../components/CreateBar";
import ReminderNote from "../components/ReminderNote";
function Reminder() {
  return (
    <>
      <CreateBar />
      <div>
        <h1> Reminders</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          margin: "auto",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "2em",
          paddingBottom: "2em",
        }}
      >
        <ReminderNote due={"Today 8:00pm"} />
        <ReminderNote due={"Today 10:00pm"} />
        <ReminderNote due={"Tomorrow 8:00pm"} />
        <ReminderNote due={"29.10.2023 8:00pm"} />
        <ReminderNote due={"01.11.2023 8:00pm"} />
      </div>
    </>
  );
}

export default Reminder;
