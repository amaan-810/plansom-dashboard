// GoalsCard.jsx
import React from "react";
import { Card, Progress } from "antd";

const GoalsCard = ({ goals }) => (
  <Card style={{ fontSize: "1rem" }}>
    <div>
      <strong style={{ fontSize: "1.25rem", margin: "1rem 0rem" }}>
        Goals Progress
      </strong>
    </div>
    {goals.map((goal) => (
      <div key={goal.key}>
        <p style={{ margin: "0rem" }}>{goal.name}</p>
        <Progress
          percent={goal.progress}
          status={goal.status}
          strokeColor={goal.status}
          size="small"
        />
      </div>
    ))}
  </Card>
);

export default GoalsCard;
