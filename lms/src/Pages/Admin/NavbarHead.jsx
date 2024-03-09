import { Avatar, Layout } from "antd";
const { Header } = Layout;
import { UserOutlined } from "@ant-design/icons";
export default function NavbarHead() {
  return (
    <div>
      <Header className="navbar">
        <div className="logo" />
        <div className="user-section">
          <Avatar size="medium" icon={<UserOutlined />} />
        </div>
      </Header>
    </div>
  );
}
