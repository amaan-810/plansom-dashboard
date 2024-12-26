import React, { useState, useEffect } from "react";
import { Layout, Menu, Card, Progress, Button, Grid, Input } from "antd";
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

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;
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
  const [collapsed, setCollapsed] = useState(false);
  const screens = useBreakpoint();

  // Adjust sidebar visibility based on screen size
  useEffect(() => {
    if (screens.lg) {
      setCollapsed(false); // Always show sidebar on large screens
      console.log(screens.lg);
    }
  }, [screens.lg]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const closeSidebar = () => {
    setCollapsed(true);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        collapsedWidth={screens.lg ? "0" : "0"}
        width={screens.lg ? 200 : "100%"}
        style={{
          position: screens.lg ? "relative" : "absolute",
          zIndex: 10,
          height: "100vh",
        }}
      >
        <div
          className="logo"
          style={{
            textAlign: "center",
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>Plansom</h2>
          {!screens.lg && (
            <Button
              icon={<CloseOutlined />}
              type="text"
              onClick={closeSidebar}
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
        {!screens.lg && (
          <Header style={{ background: "#fff", padding: "0 16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                icon={<MenuOutlined />}
                type="text"
                onClick={toggleSidebar}
                style={{ marginRight: "16px" }}
              />
              <h3 style={{ margin: "8px 0", flex: "1 1 auto" }}>Plansom</h3>
            </div>
          </Header>
        )}
        <Content style={{ margin: "16px" }}>
          <div
            style={{
              marginBottom: "16px",
              maxWidth: "400px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Search placeholder="Search Goals" enterButton />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: screens.lg
                ? "repeat(3, 1fr)"
                : screens.md
                ? "repeat(2, 1fr)"
                : "1fr",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <Card title="AI Coach" style={{ maxWidth: "400px" }}>
              <p>Your time management improved last week!</p>
              <Button type="link">Explore my stats</Button>
            </Card>
            <Card title="Goals Progress" style={{ maxWidth: "400px" }}>
              {goals.map((goal) => (
                <div key={goal.key} style={{ marginBottom: "12px" }}>
                  <p>{goal.name}</p>
                  <Progress percent={goal.progress} status={goal.status} />
                </div>
              ))}
            </Card>
            <Card title="Quick Wins" style={{ maxWidth: "400px" }}>
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
