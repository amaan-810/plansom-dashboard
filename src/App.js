import React, { useState } from "react";
import { Layout, Menu, Card, Progress, Button, Input } from "antd";
import {
  UnorderedListOutlined,
  CalendarOutlined,
  AimOutlined,
  MessageOutlined,
  ClockCircleOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./App.css";

const { Sider, Content } = Layout;
const { Search } = Input;

const goals = [
  { key: "1", name: "Capacity increasing", progress: 78, status: "active" },
  {
    key: "2",
    name: "Quality Control Enhancing",
    progress: 54,
    status: "active",
  },
  {
    key: "3",
    name: "Distribution Network Expanding",
    progress: 46,
    status: "warning",
  },
  { key: "4", name: "Event-Based Promotion", progress: 33, status: "warning" },
  {
    key: "5",
    name: "Customer Loyalty Building",
    progress: 16,
    status: "exception",
  },
];

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Update state on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        collapsedWidth="0"
        width={isMobile ? "100vw" : "15rem"}
        style={{
          position: "fixed",
          zIndex: 1000,
          height: "100vh",
          display: sidebarVisible || !isMobile ? "block" : "none",
        }}
      >
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
      </Sider>
      <Layout>
        {/* Header for mobile screens */}
        {isMobile && (
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
                flex: 1,
              }}
            >
              Plansom
            </h3>
          </div>
        )}
        <Content
          style={{
            margin: isMobile ? "4rem 1rem 1rem" : "1rem",
            marginLeft: isMobile ? "0" : "15rem", // Prevent overlapping with the sidebar
            padding: "1rem",
          }}
        >
          <div
            style={{
              marginBottom: "1rem",
              maxWidth: "25rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Search placeholder="Search Goals" enterButton />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : window.innerWidth >= 1024
                ? "repeat(3, 1fr)"
                : "repeat(2, 1fr)",
              gap: "1rem",
            }}
          >
            <Card title="AI Coach" style={{ fontSize: "1rem" }}>
              <p>Your time management improved last week!</p>
              <Button type="link">Explore my stats</Button>
            </Card>
            <Card title="Goals Progress" style={{ fontSize: "1rem" }}>
              {goals.map((goal) => (
                <div key={goal.key} style={{ marginBottom: "0.75rem" }}>
                  <p>{goal.name}</p>
                  <Progress percent={goal.progress} status={goal.status} />
                </div>
              ))}
            </Card>
            <Card title="Quick Wins" style={{ fontSize: "1rem" }}>
              <p>Update Social Media Profile</p>
              <Button type="primary">Complete Task</Button>
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

//sucess full in lap and above and moblie large till small in problem in tablet

//fourth version
