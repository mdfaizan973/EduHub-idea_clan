import { Layout, Button } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const handleLogout = () => {
    // Handle logout logic
  };

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "5px 20px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginRight: 20,
            color: "black",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          LMS
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="text"
          icon={<UserOutlined />}
          style={{ marginRight: 20 }}
        />
        <Button type="text" icon={<LogoutOutlined />} onClick={handleLogout} />
      </div>
    </Header>
  );
};

export default Navbar;
