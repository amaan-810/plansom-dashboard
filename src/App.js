import React, { useState } from "react";
import {
  Layout,
  Menu,
  Card,
  Progress,
  Button,
  Input,
  Avatar,
  Flex,
  Carousel,
} from "antd";
import {
  UnorderedListOutlined,
  CalendarOutlined,
  AimOutlined,
  MessageOutlined,
  ClockCircleOutlined,
  MenuOutlined,
  CloseOutlined,
  UserOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import "./App.css";

const { Sider, Content } = Layout;
const { Search } = Input;

const goals = [
  { key: "1", name: "Capacity increasing", progress: 78, status: "green" },
  {
    key: "2",
    name: "Quality Control Enhancing",
    progress: 54,
    status: "green",
  },
  {
    key: "3",
    name: "Distribution Network Expanding",
    progress: 46,
    status: "yellow",
  },
  { key: "4", name: "Event-Based Promotion", progress: 33, status: "yellow" },
  {
    key: "5",
    name: "Customer Loyalty Building",
    progress: 16,
    status: "red",
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
                zIndex: "10",
              }}
            >
              Plansom
            </h3>
          </div>
        )}
        <Content
          style={{
            margin: isMobile ? "4rem 1rem 1rem" : "0rem",
            marginLeft: isMobile ? "0" : "15rem", // Prevent overlapping with the sidebar
            padding: "1rem",
            backgroundImage:
              "linear-gradient(95.58deg, #E2DDFE -1.33%, #E8EBF7 28.97%, #E8EBF7 73.81%, #D9D5F4 93.63%)",
          }}
        >
          <div
            style={{
              marginBottom: "0.5rem",
              maxWidth: "25rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Search placeholder="Search Goals" enterButton />
          </div>
          <div>
            <h3
              style={{
                marginBottom: "1rem",
                marginTop: "0rem",
                fontSize: "1.5rem",
              }}
            >
              My Day
            </h3>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : window.innerWidth >= 1024
                ? "repeat(3, 1fr)"
                : "",
              // "repeat(2, 1fr)",
              gap: "1rem",
            }}
          >
            <Card
              // title="AI Coach"
              className="mycard"
              style={{
                fontSize: "1rem",
                backgroundColor: "#3100A6",
                color: "white",
              }}
            >
              <div>
                <Flex align="center">
                  {" "}
                  <Avatar size={64} icon={<UserOutlined />} />
                  <Flex vertical>
                    <p className="avtarSideText">AI Coach</p>
                    <p
                      className="avtarSideText"
                      style={{ fontSize: "0.75rem", fontWeight: "lighter" }}
                    >
                      insight for today
                    </p>
                  </Flex>
                </Flex>
              </div>
              <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Your <span style={{ color: "yellow" }}>time management</span>{" "}
                improved last week!
              </p>
              <Button
                type="default"
                style={{
                  backgroundColor: "white",
                  borderRadius: "1.5rem",
                  fontWeight: "bold",
                  padding: "1.5rem",
                }}
              >
                Explore my stats
              </Button>
            </Card>
            <Card style={{ fontSize: "1rem" }} className="mycard">
              <div>
                <strong style={{ fontSize: "1.25rem", margin: "1rem 0rem" }}>
                  Goals Progress
                </strong>
              </div>
              {goals.map((goal) => (
                <div key={goal.key} className="myprogress">
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
            <Card
              // title="Quick Wins"
              style={{ fontSize: "1rem" }}
              className="mycard"
            >
              <div>
                <strong style={{ fontSize: "1.25rem", margin: "1rem 0rem" }}>
                  Quick Wins
                </strong>
              </div>
              <p>Update Social Media Profile</p>
              <Flex gap="middle" justify="center">
                <Button
                  type="default"
                  style={{
                    backgroundColor: "#3100A6",
                    color: "white",
                    borderRadius: "1.5rem",
                    fontWeight: "bold",
                    padding: "1.5rem",
                    width: "",
                  }}
                >
                  Complete Task
                </Button>
                <Button
                  type="primary"
                  shape="circle"
                  style={{
                    backgroundColor: "white",
                    color: "grey",
                    borderRadius: "1.5rem",
                    fontWeight: "bold",
                    padding: "1.5rem",
                  }}
                  icon={<BulbOutlined />}
                />
              </Flex>
            </Card>
          </div>
          <div>
            <p
              style={{
                display: "block",
                backgroundColor: "white",
                margin: "1rem",
                fontSize: "1.5rem",
                fontStyle: "bold",
                height: "50vh",
              }}
            >
              My Task
            </p>
          </div>
          {/* <div
            style={{
              height: "50vh",
              color: "white",
              border: "1 px solid rounded-xl",
            }}
          >
            <p>khskahgsiuhag</p>
          </div> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

//sucess full in lap and above and moblie large till small in problem in tablet

//fourth version
