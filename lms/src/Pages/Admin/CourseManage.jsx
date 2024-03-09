// import React from 'react'
import { useEffect, useState } from "react";
import { Table, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
export default function CourseManage() {
  return (
    <div>
      <h1> Course Management</h1>
      <CourseTable />
    </div>
  );
}

const CourseTable = () => {
  const [courses, setCourses] = useState([]);

  const getCourseData = () => {
    axios
      .get(`http://localhost:3000/api/courses/courses`)
      .then((res) => {
        console.log(res.data);
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCourseData();
  }, []);

  const handleDelete = (key) => {
    setCourses(courses.filter((item) => item.key !== key));
  };

  const handleEdit = (key) => {
    console.log(`Editing item with key: ${key}`);
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "imageLink",
      key: "imageLink",
      render: (imageLink) => (
        <img
          src={imageLink}
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
      dataIndex: "docsLink",
      key: "docsLink",
      render: (docsLink) => (
        <a target="_blank" href={docsLink}>
          Docs
        </a>
      ),
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

  return <Table dataSource={courses} columns={columns} />;
};
