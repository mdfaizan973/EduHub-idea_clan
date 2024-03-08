import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;
export default function Register() {
  return (
    <div>
      <SignUpPage />
    </div>
  );
}

const SignUpPage = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Here you can handle the form submission, such as calling an API for registration
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
        Sign Up
      </Title>
      <Form
        name="signup-form"
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
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
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
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div style={{ marginTop: 20 }}>
        Already have an account? <a href="/">Log in</a>
      </div>
    </div>
  );
};
