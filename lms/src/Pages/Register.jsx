import { useState } from "react";
import { Form, Input, Button, Typography, Modal, Card, Row, Col } from "antd";
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isSignUpDisabled, setIsSignUpDisabled] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setIsSignUpDisabled(selectedCourses.length !== 3);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Received values:", { ...values, courses: selectedCourses });
    // window.location.href = "/";
    // Here you can handle the form submission, such as calling an API for registration
  };

  const onCardClick = (course) => {
    if (selectedCourses.includes(course.coursename)) {
      setSelectedCourses(
        selectedCourses.filter((c) => c !== course.coursename)
      );
    } else if (selectedCourses.length < 3) {
      setSelectedCourses([...selectedCourses, course.coursename]);
    }
  };

  const courses = [
    {
      coursename: "JavaScript",
      courseimg:
        "https://user-images.githubusercontent.com/106812942/255094159-1381596d-06ae-422b-9321-94903c9c6cb3.png",
    },
    {
      coursename: "React.js",
      courseimg:
        "https://user-images.githubusercontent.com/106812942/255093713-fc4acefd-5ae5-469a-ac28-75fff76f758a.png",
    },
    {
      coursename: "Next.js",
      courseimg:
        "https://cdn3d.iconscout.com/3d/free/thumb/free-react-js-5562354-4642758.png",
    },
    {
      coursename: "React Native",
      courseimg:
        "https://cdn3d.iconscout.com/3d/free/thumb/free-react-5645899-4695757.png?f=webp",
    },
    {
      coursename: "Flutter",
      courseimg:
        "https://cdn3d.iconscout.com/3d/free/thumb/free-flutter-9294855-7577998.png",
    },
    {
      coursename: "DSA",
      courseimg:
        "https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/data-systems-analysts-inc-dsa-vector-logo-900x0.png",
    },

    {
      coursename: "Angular.js",
      courseimg:
        "https://user-images.githubusercontent.com/106812942/278868564-8627170b-5eb9-4d18-84e8-4d7096bb4079.png",
    },
    {
      coursename: "Node.js",
      courseimg:
        "https://user-images.githubusercontent.com/106812942/255087494-28073997-96d4-48ce-9bb6-c46f9cbe48b9.png",
    },
    {
      coursename: "Express.js",
      courseimg:
        "https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
    },
  ];

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
      <Title level={3} style={{ marginBottom: 20 }}>
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
            onClick={showModal}
            style={{
              width: "100%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Select Courses
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%", marginTop: 10, backgroundColor: "#52c41a" }}
            disabled={isSignUpDisabled}
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Select 3 Courses As Per Your Choice"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row gutter={[16, 16]}>
          {courses.map((course) => (
            <Col key={course.coursename} span={8}>
              <Card
                onClick={() => onCardClick(course)}
                style={{
                  cursor: "pointer",
                  backgroundColor: selectedCourses.includes(course.coursename)
                    ? "#52c41a"
                    : "white",
                  textAlign: "center",
                }}
              >
                <img
                  src={course.courseimg}
                  alt={course.coursename}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: 5,
                  }}
                />
                <div>{course.coursename}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Modal>

      <div style={{ marginTop: 20 }}>
        Already have an account? <a href="/">Log in</a>
      </div>
    </div>
  );
};
