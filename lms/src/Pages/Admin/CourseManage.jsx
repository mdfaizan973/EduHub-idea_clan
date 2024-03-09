// import React from 'react'
import { useState } from "react";
import { Table, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function CourseManage() {
  return (
    <div>
      <h1> Course Management</h1>
      <CourseTable />
    </div>
  );
}

const CourseTable = () => {
  const [data, setData] = useState([
    {
      key: "1",
      image:
        "https://i.ibb.co/CtsLDyq/cc8882905c39c034c16a86ee73c402f6-removebg-preview.png",
      name: "Course Name",
      description: "Course Description",
      link: "http://example.com",
    },
  ]);

  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  const handleEdit = (key) => {
    console.log(`Editing item with key: ${key}`);
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="Course"
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Docs",
      dataIndex: "docs",
      key: "docs",
      render: (Docs) => <a href={Docs}>Docs</a>,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(1)}
          >
            Edit
          </Button>
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(2)}
            danger
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};
