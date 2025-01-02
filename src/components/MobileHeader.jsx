// MobileHeader.jsx
import React from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const MobileHeader = ({ toggleSidebar }) => (
  <div
    style={{
      background: "#fff",
      padding: "0.5rem 1rem",
      position: "fixed",
      width: "100%",
      zIndex: 500,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "4rem",
      borderBottom: "1px solid #ddd",
    }}
  >
    <Button
      icon={<MenuOutlined />}
      type="text"
      onClick={toggleSidebar}
      style={{ fontSize: "1.25rem" }}
    />
    <h3
      style={{
        margin: 0,
        fontSize: "1.5rem",
        textAlign: "center",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      Plansom
    </h3>
    <div style={{ width: "1.25rem" }} />
  </div>
);

export default MobileHeader;
