// Sidebar.jsx
import React from "react";
import { Menu, Button } from "antd";
import {
  UnorderedListOutlined,
  AimOutlined,
  MessageOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const Sidebar = ({ isMobile, sidebarVisible, closeSidebar }) => (
  <div>
    <div
      className="logo"
      style={{
        textAlign: "center",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Plansom</h2>
      {isMobile && (
        <Button
          icon={<CloseOutlined />}
          type="text"
          onClick={closeSidebar}
          style={{ fontSize: "1.25rem" }}
        />
      )}
    </div>
    <Menu mode="inline">
      <Menu.Item key="1" icon={<UnorderedListOutlined />}>
        My Day
      </Menu.Item>
      <Menu.Item key="2" icon={<AimOutlined />}>
        Goals
      </Menu.Item>
      <Menu.Item key="3" icon={<MessageOutlined />}>
        Messages
      </Menu.Item>
      <Menu.Item key="4" icon={<CalendarOutlined />}>
        Calendar
      </Menu.Item>
      <Menu.Item key="5" icon={<ClockCircleOutlined />}>
        Track
      </Menu.Item>
    </Menu>
  </div>
);

export default Sidebar;
