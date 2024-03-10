import Navbar from "./Navbar";
import { Card, Avatar, Tag } from "antd";
import { Form, Input, Button, Typography } from "antd";
const { Title } = Typography;

import axios from "axios";
import { useEffect, useState } from "react";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";
import "./Styles.css";
// import { EditOutlined } from "@ant-design/icons";
export default function StudentsProfile() {
  const user_id = sessionStorage.getItem("lmscurrentstudent");
  const [getUser, setGetuser] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users/users")
      .then((res) => {
        const users = res.data;
        const user = users.find((user) => user._id === user_id);
        if (user) {
          setGetuser(user);
        } else {
          console.log("User not found");
        }
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });
  }, [user_id]);
  console.log(getUser);

  const handleUpdate = (value) => {
    console.log("Updated data:", value);
  };
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "75%",
          margin: "50px auto",
          borderRadius: "10px",
          backgroundColor: "#fff",
          padding: "10px",
          height: "50%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Card
          style={{ border: "1px dotted grey", padding: "10px", width: "30%" }}
          className="profile-card"
          hoverable
        >
          <div className="profile-header">
            <Avatar
              style={{ border: "1px dotted grey" }}
              src="https://i.pinimg.com/564x/06/70/0e/06700e92fe099af7ee9148a07b435c9c.jpg"
              size={150}
              hoverable
            />
            <h1>Name: {getUser.name}</h1>
          </div>
          <div className="profile-content" style={{ lineHeight: "2" }}>
            <p>
              <strong>Email:</strong> {getUser.email}
            </p>
            <p>
              <strong>Password:</strong> {getUser.password}
            </p>
            <p>
              <strong>Courses:</strong>
            </p>

            {Array.isArray(getUser.courses) &&
              getUser.courses.map((course, index) => (
                <Tag key={index} style={{ marginRight: "8px" }} color="blue">
                  {course}
                </Tag>
              ))}
          </div>
        </Card>
        <div
          style={{
            width: "60%",
            margin: "50px auto",
            borderRadius: "10px",
            backgroundColor: "#fff",
            padding: "10px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <div></div> */}

          <Form
            name="update-profile-form"
            onFinish={handleUpdate}
            style={{
              width: 450,
              padding: 20,
              borderRadius: 5,
              boxShadow: "2px 4px 6px rgba(0.1, 0, 0, 0.1)",
            }}
          >
            {" "}
            <Title level={3} style={{ marginBottom: 20 }}>
              Update Your Profile
            </Title>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<MailOutlined />}
                type="email"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              {Array.isArray(getUser.courses) &&
                getUser.courses.map((course, index) => (
                  <Tag key={index} style={{ marginRight: "8px" }} color="blue">
                    {course}
                  </Tag>
                ))}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  marginTop: 10,
                  backgroundColor: "#52c41a",
                }}
              >
                Update Profile
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}