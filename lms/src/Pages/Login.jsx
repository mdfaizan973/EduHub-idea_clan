// import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const { Title } = Typography;
// import axios from "axios";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    sessionStorage.setItem("user_loged_in", "true");
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
