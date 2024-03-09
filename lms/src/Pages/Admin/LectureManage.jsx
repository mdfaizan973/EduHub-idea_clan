// import React from 'react'

import { Layout } from "antd";
import Sidebar from "./Sidebar ";
import { Form, Input, Button, TimePicker } from "antd";
const { Content } = Layout;
import NavbarHead from "./NavbarHead";
import "./Styles.css";
export default function LectureManage() {
  return (
    <div>
      <AppLayout />
    </div>
  );
}
const AppLayout = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <div className="image-container_topright">
              <img
                src="https://i.ibb.co/CtsLDyq/cc8882905c39c034c16a86ee73c402f6-removebg-preview.png"
                alt="Course"
              />
            </div>
            <div className="form-container">
              <h2 style={{ marginBottom: 20, fontWeight: "bold" }}>
                lecture Form
              </h2>
              <Form
                name="lecture_form"
                onFinish={onFinish}
                style={{
                  width: 370,
                  padding: 20,
                  borderRadius: 5,
                  boxShadow: "2px 4px 6px rgba(0.1, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                }}
              >
                <Form.Item
                  name="lectureName"
                  rules={[
                    { required: true, message: "Please input lecture name!" },
                  ]}
                >
                  <Input placeholder="Lecture Name" />
                </Form.Item>
                <Form.Item
                  name="lectureTitle"
                  rules={[
                    { required: true, message: "Please input lecture title!" },
                  ]}
                >
                  <Input placeholder="Lecture Title" />
                </Form.Item>
                <Form.Item
                  name="startTime"
                  rules={[
                    { required: true, message: "Please select start time!" },
                  ]}
                >
                  <TimePicker
                    style={{ width: "100%" }}
                    placeholder="Start Time"
                  />
                </Form.Item>
                <Form.Item
                  name="endTime"
                  rules={[
                    { required: true, message: "Please select end time!" },
                  ]}
                >
                  <TimePicker
                    style={{ width: "100%" }}
                    placeholder="End Time"
                  />
                </Form.Item>
                <Form.Item
                  name="instructorName"
                  rules={[
                    {
                      required: true,
                      message: "Please input instructor name!",
                    },
                  ]}
                >
                  <Input placeholder="Instructor Name" />
                </Form.Item>
                <Form.Item
                  name="classLink"
                  rules={[
                    { required: true, message: "Please input class link!" },
                  ]}
                >
                  <Input placeholder="Class Link" />
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
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
