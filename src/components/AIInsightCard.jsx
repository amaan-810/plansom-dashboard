// AIInsightCard.jsx
import React from "react";
import { Card, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const AIInsightCard = () => (
  <Card style={{ backgroundColor: "#3100A6", color: "white" }}>
    <div>
      <Avatar size={64} icon={<UserOutlined />} />
      <div>
        <p>AI Coach</p>
        <p style={{ fontSize: "0.75rem", fontWeight: "lighter" }}>
          Insight for today
        </p>
      </div>
    </div>
    <p style={{ fontSize: `calc(2rem - 0.75rem)`, fontWeight: "bold" }}>
      Your <span style={{ color: "yellow" }}>time management</span> improved last
      week!
    </p>
    <Button
      style={{
        backgroundColor: "white",
        color: "black",
        borderRadius: "1.5rem",
        fontWeight: "bold",
        padding: "1.5rem",
      }}
    >
      Explore my stats
    </Button>
  </Card>
);

export default AIInsightCard;
