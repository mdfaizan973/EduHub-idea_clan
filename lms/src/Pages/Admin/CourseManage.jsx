// import React from 'react'
import { useEffect, useState } from "react";
import { Table, Button, Space, message, Modal } from "antd";
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
        // console.log(res.data);
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    // console.log(`Deleting item with id: ${id}`);
    axios
      .delete(`http://localhost:3000/api/courses/${id}`)
      .then((res) => {
        console.log(res.data);
        message.error(`Course is Removed `);

        setCourses((prevCourses) =>
          prevCourses.filter((course) => course._id !== id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCourseData();
  }, []);

  const handleEdit = (key) => {
    console.log(`Editing item with key: ${key}`);
    Modal.info({
      title: "Edit Item",
      content: (
        <div>
          <p>Hello</p>
        </div>
      ),
      onOk() {},
    });
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "imageLink",
      key: "imageLink",
      render: (imageLink) => (
        <img
          style={{ width: 50, height: 50, borderRadius: "50%" }}
          src={imageLink}
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src =
              "https://cdn3d.iconscout.com/3d/premium/thumb/coding-5306043-4460164.png?f=webp";
          }}
          alt="course Image"
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
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record._id)}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={courses} columns={columns} />;
};
