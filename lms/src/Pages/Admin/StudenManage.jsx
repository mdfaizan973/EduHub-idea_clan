import { Layout, Table, Button, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import NavbarHead from "./NavbarHead";
import Sidebar from "./Sidebar ";
import "./Styles.css";
const { Content } = Layout;

const data = [
  {
    key: "1",
    image:
      "https://i.pinimg.com/564x/71/23/dc/7123dc850129d89b1d27380f47018411.jpg",
    code: "001",
    name: "John Doe",
    courses: ["React.js", "Node.js", "JavaScript"],
  },
  {
    key: "2",
    image:
      "https://i.pinimg.com/564x/77/1b/20/771b2040dc38a0ac151c398a22af2d42.jpg",
    code: "002",
    name: "Jane Smith",
    courses: ["Angular", "JavaScript", "Node.js"],
  },
];

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => (
      <img src={image} alt="Avatar" className="student_avatar" />
    ),
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Courses",
    dataIndex: "courses",
    key: "courses",
    render: (courses) => (
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Button
          type="primary"
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record.key)}
          danger
        >
          Delete
        </Button>
      </Space>
    ),
  },
];

const handleDelete = (key) => {
  // Implement delete functionality
  console.log("Delete item with key:", key);
};

export default function StudenManage() {
  return (
    <div>
      <AppLayout />
    </div>
  );
}

const AppLayout = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <NavbarHead />
          <h2 style={{ marginBottom: 20, marginTop: 20, fontWeight: "bold" }}>
            Course Form
          </h2>
          <Table
            dataSource={data}
            columns={columns}
            pagination={false}
            className="studentmanagement-table"
          />
        </Content>
      </Layout>
    </Layout>
  );
};
