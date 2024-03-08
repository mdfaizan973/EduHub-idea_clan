// import React from 'react'
import { Layout } from "antd";
import Sidebar from "./Sidebar ";
const { Content } = Layout;

export default function CourseCreation() {
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
          CourseCreation{" "}
        </Content>
      </Layout>
    </Layout>
  );
};
