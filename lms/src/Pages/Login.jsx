// import React from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const { Title } = Typography;
import axios from "axios";
const Login = () => {
  const onFinish = async (values) => {
    try {
      const usersResponse = await axios.get(
        "http://localhost:3000/api/users/users"
      );
      const users = usersResponse.data;
      const user = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user) {
        sessionStorage.setItem("lmscurrentstudent", user._id);
        message.success("Login Successful!");
        sessionStorage.setItem("user_logged_in", "true");
        setTimeout(() => {
          window.location.href = "/students";
        }, 1000);
      } else {
        try {
          const adminsResponse = await axios.get(
            "http://localhost:3000/api/admins"
          );
          const admins = adminsResponse.data;
          console.log(admins);
          const admin = admins.find(
            (admin) =>
              admin.email === values.adminEmail &&
              admin.password === values.password
          );

          if (admin) {
            message.success("Admin Login Successful!");
            sessionStorage.setItem("admin_logged_in", "true");

            setTimeout(() => {
              window.location.href = "/admindashboard";
            }, 1000);
          } else {
            message.error("Login Failed! Please try again.");
          }
        } catch (error) {
          console.error(error);
          message.error("An error occurred. Please try again.");
        }
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Title level={2} style={{ marginBottom: 20, fontWeight: "bold" }}>
        Sign In
      </Title>
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{
          width: 350,
          padding: 20,
          borderRadius: 5,
          boxShadow: "2px 4px 6px rgba(0.1, 0, 0, 0.1)",
        }}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              backgroundColor: "#52c41a",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <div style={{ marginTop: 20 }}>
        Do not have an account? <a href="/register">Register now!</a>
      </div>
    </div>
  );
};

export default Login;
