import { Layout, Button, Menu } from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";
import "./Styles.css";
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider className="sidebar" width={250} theme="light">
      <div className="logo">
        <h1>LMS</h1>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "90%", borderRight: 0, marginTop: "20px" }}
      >
        <Menu.Item key="1" style={{ marginTop: 10 }} icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" style={{ marginTop: 10 }} icon={<UserOutlined />}>
          Course Creation
        </Menu.Item>
        <Menu.Item key="3" style={{ marginTop: 10 }} icon={<SettingOutlined />}>
          Lecture Management
        </Menu.Item>
        <Menu.Item key="4" style={{ marginTop: 10 }} icon={<SettingOutlined />}>
          Analytics and Insights
        </Menu.Item>
        <Menu.Item key="5" style={{ marginTop: 10 }} icon={<SettingOutlined />}>
          Student and Course Management
        </Menu.Item>
        {/* <Menu.Item key="6" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item key="7" icon={<SettingOutlined />}>
          Settings
        </Menu.Item> */}

        <div className="container">
          <div className="top-section">
            <img
              src="https://i.pinimg.com/564x/28/7d/e5/287de5cc1c825597a50d56520555ee32.jpg"
              alt="top image"
            />
          </div>
          <div className="bottom-section">
            <Button
              icon={<SettingOutlined />}
              type="primary"
              style={{ width: "100%" }}
            >
              Settings
            </Button>
          </div>
        </div>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
