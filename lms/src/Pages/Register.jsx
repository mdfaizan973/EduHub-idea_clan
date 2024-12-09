import { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  Modal,
  Card,
  Row,
  Col,
  message,
  Drawer,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";
const { Title } = Typography;
import "./Style.css";
export default function Register() {
  return (
    <div className="logincontainer">
      <SignUpPage />
    </div>
  );
}

const SignUpPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isSignUpDisabled, setIsSignUpDisabled] = useState(true);
  const [courses, setCourses] = useState([]);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSubmitCourse = () => {
    setIsModalVisible(false);
    setIsSignUpDisabled(selectedCourses.length !== 3);
    setVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    // console.log("Received values:", { ...values, courses: selectedCourses });
    axios
      .post(`https://lmshub.vercel.app/api/users/register`, {
        ...values,
        courses: selectedCourses,
      })
      .then((res) => {
        console.log(res);
        message.success("Registration successful");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onCardClick = (course) => {
    if (selectedCourses.includes(course.name)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course.name));
    } else if (selectedCourses.length < 3) {
      setSelectedCourses([...selectedCourses, course.name]);
    }
  };

  const getCourses = () => {
    axios
      .get(`https://lmshub.vercel.app/api/courses/courses`)
      .then((res) => {
        console.log(res);
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCourses();
  }, []);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const colors = ["#2ed0ee", "#f0512b", "#ffc107"];
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
            // onClick={showModal}
            onClick={showDrawer}
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
        onOk={handleSubmitCourse}
        onCancel={handleCancel}
      >
        <Row gutter={[16, 16]}>
          {courses.map((course) => (
            <Col key={course.name} span={8}>
              <Card
                onClick={() => onCardClick(course)}
                style={{
                  cursor: "pointer",
                  backgroundColor: selectedCourses.includes(course.name)
                    ? "#52c41a"
                    : "white",
                  textAlign: "center",
                }}
              >
                <img
                  src={course.imageLink}
                  alt={course.name}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: 5,
                  }}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src =
                      "https://cdn3d.iconscout.com/3d/premium/thumb/coding-5306043-4460164.png?f=webp";
                  }}
                />
                <div>{course.name}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Modal>

      <Drawer
        title="Select 3 Courses As Per Your Choice" // Optional title
        placement="right"
        onClose={onClose}
        open={visible}
      >
        <div>
          <Row gutter={[16, 16]}>
            {courses.map((course) => (
              <Col key={course.name} span={24}>
                <Card
                  onClick={() => onCardClick(course)}
                  style={{
                    cursor: "pointer",
                    // backgroundColor: selectedCourses.includes(course.name)
                    //   ? `#${Math.floor(Math.random() * 16777215).toString(16)}` // Generate random color
                    //   : "white",
                    backgroundColor: selectedCourses.includes(course.name)
                      ? colors[
                          selectedCourses.indexOf(course.name) % colors.length
                        ] // Cycle through colors
                      : "white",
                    border: "1px solid #d9d9d9",
                    borderRadius: "5px",
                    padding: "0px !important",
                    height: "100%",
                  }}
                  bodyStyle={{
                    padding: 0, // Set padding to 0
                  }}
                >
                  {/* Custom Wrapper for Horizontal Layout */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0px",
                    }}
                  >
                    {/* Image Section */}
                    <img
                      src={course.imageLink}
                      alt={course.name}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        marginRight: "16px",
                      }}
                      onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        e.target.src =
                          "https://cdn3d.iconscout.com/3d/premium/thumb/coding-5306043-4460164.png?f=webp";
                      }}
                    />
                    {/* Name Section */}
                    <div
                      style={{
                        flex: 1,
                        fontSize: "16px",
                        fontWeight: "500",
                        color: selectedCourses.includes(course.name)
                          ? "#fff"
                          : "black",
                      }}
                    >
                      {course.name}
                    </div>
                    <div
                      style={{
                        // border: "1px solid green",
                        marginRight: "10px",
                        borderRadius: "50%",
                        // height: "20px",
                        // width: "20px",
                        // backgroundColor: selectedCourses.includes(course.name)
                        //   ? "red"
                        //   : "white",
                        fontSize: "20px",
                      }}
                    >
                      {/* 🌐 */}
                      {selectedCourses.includes(course.name) ? (
                        <CheckCircleOutlined />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <Button
            type="primary"
            onClick={handleSubmitCourse}
            style={{ marginTop: "16px" }}
          >
            Submit
          </Button>
        </div>
      </Drawer>

      <div style={{ marginTop: 20 }}>
        Already have an account? <a href="/">Log in</a>
      </div>

      <br />

      <footer className="footer">
        <div className="links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
      </footer>
      <br />
      <div className="copyright">
        © 2024 by <a href="https://mdfaizan973.github.io/">Md Faizan</a>
      </div>
    </div>
  );
};
