import { Layout, Table, Button, Space, Tag, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import NavbarHead from "./NavbarHead";
import Sidebar from "./Sidebar ";
import axios from "axios";
import "./Styles.css";
import { useEffect, useState } from "react";
const { Content } = Layout;

export default function StudenManage() {
  return (
    <div>
      <AppLayout />
    </div>
  );
}

const AppLayout = () => {
  const [students, setStudents] = useState([]);

  const getStudents = () => {
    axios
      .get(`http://localhost:3000/api/users/users`)
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudents();
  }, []);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: () => (
        <img
          src="https://i.pinimg.com/564x/8e/f5/49/8ef549db43e4de09afddc75eb5effc05.jpg"
          alt="Avatar"
          className="student_avatar"
        />
      ),
    },

    {
      title: "Student Code",
      dataIndex: "_id",
      key: "_id",
      render: (text) => {
        const words = text.split("").slice(0, 6).join("");
        return words.length < text.length ? `${words}` : words;
      },
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Selected Courses",
      dataIndex: "courses",
      key: "courses",
      render: (courses) => (
        <ul>
          {courses.map((course, index) => (
            <Tag key={index} color="blue">
              {/* <Button></Button> */}
              {course}
            </Tag>
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
            onClick={() => handleDelete(record._id)}
            danger
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/users/${id}`)
      .then((res) => {
        console.log(res.data);
        message.error(`Student is Removed `);

        setStudents((prevStudents) =>
          prevStudents.filter((student) => student._id !== id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
            All Students
          </h2>
          <Table
            dataSource={students}
            columns={columns}
            pagination={false}
            className="studentmanagement-table"
          />
        </Content>
      </Layout>
    </Layout>
  );
};
