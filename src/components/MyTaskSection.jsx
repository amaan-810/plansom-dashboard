// MyTaskSection.jsx
import React from "react";

const MyTaskSection = () => (
  <div
    style={{
      backgroundColor: "white",
      margin: "1rem",
      padding: "1rem",
      fontSize: "1.25rem",
      borderRadius: "0.5rem",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      minHeight: "20vh",
    }}
  >
    <h3 style={{ marginBottom: "1rem" }}>My Task</h3>
    <p>Your tasks for today will appear here.</p>
  </div>
);

export default MyTaskSection;
