// import React from 'react'

import { Layout, Card, Row, Typography, Button } from "antd";
import Sidebar from "./Sidebar ";
const { Content } = Layout;
const { Title } = Typography;

import "./Styles.css";
import NavbarHead from "./NavbarHead";
export default function Analytics() {
  return (
    <div>
      <AppLayout />
    </div>
  );
}
const AppLayout = () => {
  const array = [
    {
      image: "",
      name: "",
      disk: "",
      docsLink: "",
    },
    {},
    {},
    {},
    {},
  ];

  const totalLectures = [{}, {}];
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
          {/* Navbar */}
          <NavbarHead />
          {/* Content */}
          <Card className="total-students-card">
            <div className="card-content">
              <h2>Total Students</h2>
              <h1>999</h1>
            </div>
          </Card>
          {/* all courses */}
          <Title level={1} style={{ marginBottom: 20, fontWeight: "bold" }}>
            All Courses
          </Title>
          <Row gutter={[16, 16]}>
            {array.map((product, i) => (
              <Card
                key={i}
                className="custom-card"
                hoverable
                style={{ width: 190 }}
                cover={
                  <div className="card-cover">
                    <img
                      alt={product.name}
                      src="https://user-images.githubusercontent.com/106812942/255094159-1381596d-06ae-422b-9321-94903c9c6cb3.png"
                    />
                  </div>
                }
                actions={[
                  <a
                    key={i}
                    href="https://mdfaizan973.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Docs
                  </a>,
                ]}
              >
                <div className="custom-card-content">
                  <h3>Javascript</h3>
                  <p>Learn javascript with us.</p>
                </div>
              </Card>
            ))}
          </Row>
          <Title level={1} style={{ marginBottom: 20, fontWeight: "bold" }}>
            Lectures
          </Title>
          {totalLectures.map((ele, i) => (
            <Card key={i} className="horizontal-card" hoverable>
              <div className="card-content">
                <div className="image-container">
                  <img
                    className="image_container_image"
                    alt={name}
                    src="https://students.masaischool.com/static/media/openBookImage.95b8e8b4378306339c056f175c2f9b66.svg"
                  />
                </div>
                <div className="details">
                  <h3>React.js</h3>
                  <p>useState and other hooks</p>
                  <p>9AM - 10AM</p>
                </div>
                <div className="join-button">
                  <Button type="primary">Join</Button>
                </div>
              </div>
            </Card>
          ))}
        </Content>
      </Layout>
    </Layout>
  );
};
