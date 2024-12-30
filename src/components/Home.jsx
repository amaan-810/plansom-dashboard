import React from "react";
import { useState } from "react";
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
  Grid,
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
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "../App.css";

const { Sider, Content } = Layout;
const { Search } = Input;
const { useBreakpoint } = Grid;

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

const Home = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false); // Manage mobile sidebar visibility
  const screens = useBreakpoint();
  console.log(screens);
  const isMobile = !screens.md; // Mobile: width < 768px
  const isTablet = !screens.lg;

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        theme="light"
        width={isMobile ? "100vw" : "15rem"}
        style={{
          position: "fixed",
          zIndex: 1000,
          height: "100vh",
          display: isMobile && !sidebarVisible ? "none" : "block",
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

      {/* Main Content */}
      <Layout>
        {/* Mobile Header */}
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
              justifyContent: "space-between", // Corrects layout
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
                position: "absolute", // Ensures absolute centering
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Plansom
            </h3>
            <div style={{ width: "1.25rem" }} />{" "}
            {/* Placeholder for alignment */}
          </div>
        )}

        <Content
          style={{
            margin: isMobile ? "4rem 0rem 1rem 0rem" : "0rem",
            marginLeft: isMobile ? "0" : "15rem",
            padding: "1rem",
            backgroundImage:
              "linear-gradient(95.58deg, #E2DDFE -1.33%, #E8EBF7 28.97%, #E8EBF7 73.81%, #D9D5F4 93.63%)",
          }}
        >
          <div
            style={{
              marginBottom: "0.5rem",
            }}
          >
            <Flex align="center" justify="space-around">
              <Flex align="center">
                <Input
                  placeholder="Search for a..."
                  prefix={<SearchOutlined />}
                  style={{
                    borderRadius: "1.5rem",
                    width: isMobile
                      ? `calc(100vw - 30vw)`
                      : `calc(100vw - 50vw)`,
                    padding: "0.5rem",
                    margin: "0.5rem",
                  }}
                ></Input>
                <Button
                  type="default"
                  icon={isMobile ? <PlusOutlined /> : ""}
                  iconPosition="start"
                  style={{
                    backgroundColor: "#3100A6",
                    color: "white",
                    borderRadius: "1.5rem",
                    fontWeight: "bold",
                    padding: "1rem",
                  }}
                >
                  {isMobile ? "" : "Add Item"}
                </Button>
              </Flex>
              {/* <Search placeholder="Search Goals" enterButton /> */}
              {isMobile ? (
                ""
              ) : (
                <Flex style={{ padding: "1rem" }}>
                  <Avatar size={40} icon={<UserOutlined />} />
                  <p style={{ margin: "0.5rem" }}>user</p>
                </Flex>
              )}
            </Flex>
          </div>
          <div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>My Day</h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            <Card
              style={{
                backgroundColor: "#3100A6",
                color: "white",
              }}
              className="mycard"
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
              <p
                style={{
                  fontSize: `calc(2rem - 0.75rem)`,
                  fontWeight: "bold",
                }}
              >
                Your <span style={{ color: "yellow" }}>time management</span>{" "}
                improved last week!
              </p>
              <Button
                type="default"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "1.5rem",
                  fontWeight: "bold",
                  padding: "1.5rem",
                }}
                className="mybutton"
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
                  }}
                  className="mybtn"
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
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
