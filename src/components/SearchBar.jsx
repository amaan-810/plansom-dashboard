// SearchBar.jsx
import React from "react";
import { Input, Button, Avatar } from "antd";
import { SearchOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const SearchBar = ( ) => {
  const screens = useBreakpoint();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: !screens.md ? "space-between" : "space-around",
        zIndex: 100,
        marginTop: !screens.md && "3.5rem",
        marginBottom: "1rem",
        padding: !screens.md ? "0.5rem" : "1rem",
        backgroundColor: "transparent", // Mobile header styling
      }}
    >
      <Input
        placeholder="Search for a..."
        prefix={<SearchOutlined />}
        style={{
          borderRadius: "1.5rem",
          width: !screens.md ? `calc(100vw - 30vw)` : `calc(100vw - 50vw)`,
          marginRight: !screens.md ? "0.5rem" : "1rem",
        }}
      />
      <Button
        type="default"
        icon={!screens.md ? <PlusOutlined /> : null}
        style={{
          backgroundColor: "#3100A6",
          color: "white",
          borderRadius: "1.5rem",
          fontWeight: "bold",
          padding: !screens.md ? "0.5rem" : "1rem",
        }}
      >
        {!screens.md ? "" : "Add Item"}
      </Button>
      {screens.md && (
        <Avatar
          size={40}
          icon={<UserOutlined />}
          style={{ backgroundColor: "#f56a00", cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default SearchBar;
