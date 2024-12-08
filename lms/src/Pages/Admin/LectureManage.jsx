import { useState, useEffect } from "react";
import axios from "axios";
import { Layout, message } from "antd";
import Sidebar from "./Sidebar ";
import { Form, Input, Button, TimePicker, Select } from "antd";
const { Content } = Layout;
import NavbarHead from "./NavbarHead";
import "./Styles.css";
import { Table, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const { Search } = Input;
const { Option } = Select;
export default function LectureManage() {
  return (
    <div>
      <AppLayout />
    </div>
  );
}
const AppLayout = () => {
  const [courseNameForm, setCourseNameForm] = useState([]);
  const [submitLec, setSubmitLec] = useState(0);

  const onFinish = (values) => {
    console.log("Received values:", values);
    axios
      .post(`https://lmshub.vercel.app/api/lectures`, values)
      .then((res) => {
        console.log(res.data);
        message.success("Lecture has been successfully created");
        setSubmitLec(submitLec + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllCoursesName();
  }, []);

  const getAllCoursesName = () => {
    axios
      .get(`https://lmshub.vercel.app/api/courses/courses`)
      .then((res) => {
        if (res.data) {
          preapreListOfName(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const preapreListOfName = (coursedata) => {
    let coursesNameArray = [];

    coursedata.forEach((ele, i) => {
      coursesNameArray.push({
        value: i,
        name: ele.name,
      });
    });
    setCourseNameForm(coursesNameArray);
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
                    { required: true, message: "Please input course name!" },
                  ]}
                >
                  {/* <Input placeholder="Course Name" /> */}
                  <Select
                    placeholder="Select Course"
                    style={{ fontSize: 16, marginRight: 20 }}
                    // onChange={handleFilterChange}
                  >
                    {courseNameForm.map((ele, i) => (
                      <Option key={i} value={ele.name}>
                        {ele.name}
                      </Option>
                    ))}
                  </Select>
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
        <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
          {" "}
          Lectures Management
        </h1>
        <CourseTable submitLec={submitLec} />
      </Layout>
    </Layout>
  );
};

const CourseTable = (submitLec) => {
  const [lectures, setLectures] = useState([]);
  // const [courseName, setCourseName] = useState([]);
  const superadmin = sessionStorage.getItem("super_admin_logged_in");
  const [isSuperAdminOk, setIsSuperAdminOk] = useState(
    superadmin == "true" ? true : false
  );
  const getAllLectures = () => {
    axios
      .get(`https://lmshub.vercel.app/api/lectures`)
      .then((res) => {
        // console.log(res.data);
        setLectures(res.data);
        // setShowDataFilter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://lmshub.vercel.app/api/lectures/${id}`)
      .then((res) => {
        console.log(res.data);
        message.error(`Lecture is Removed `);

        // setLectures((prevLecture) =>
        //   prevLecture.filter((lecture) => lecture._id !== id)
        // );
        if (res) {
          getAllLectures();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllLectures();
  }, [submitLec]);

  // filter
  const [searchTerm, setSearchTerm] = useState("");
  const [instructorName, setInstructorName] = useState([]);
  const [coursesName, setCourseName] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  // const [showDataFilter, setShowDataFilter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://lmshub.vercel.app/api/courses/courses`)
      .then((res) => {
        setCourseName(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://lmshub.vercel.app/api/lectures`)
      .then((res) => {
        setInstructorName(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearchAndFilter = (searchTerm, filterTerm) => {
    const search = searchTerm.toLowerCase();
    const filter = filterTerm.toLowerCase();

    const searchResult = lectures.filter(
      (lecture) =>
        lecture.instructorName.toLowerCase().includes(search) ||
        lecture.lectureName.toLowerCase().includes(search)
    );

    const combinedResult = searchResult.filter(
      (lecture) =>
        lecture.instructorName.toLowerCase().includes(filter) ||
        lecture.lectureName.toLowerCase().includes(filter)
    );

    // setShowDataFilter(combinedResult);
    setLectures(combinedResult);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    handleSearchAndFilter(value, filterTerm);
  };

  const handleFilterChange = (value) => {
    setFilterTerm(value);
    handleSearchAndFilter(searchTerm, value);
  };

  const columns = [
    {
      title: "Course Name",
      dataIndex: "lectureName",
      key: "lectureName",
    },
    {
      title: "Lecture Name",
      dataIndex: "lectureTitle",
      key: "lectureTitle",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "Instructor Name",
      dataIndex: "instructorName",
      key: "instructorName",
    },
    {
      title: "Class Link",
      dataIndex: "classLink",
      key: "classLink",
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          <Button>Class Link</Button>
        </a>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            disabled={!isSuperAdminOk}
            onClick={() => handleDelete(record._id)}
            danger
          ></Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div
        className="search_filter"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <Search
          placeholder="Search..."
          style={{
            width: 300,
            marginRight: 20,
            fontSize: 20,
          }}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <Select
          placeholder="Select Course"
          style={{ width: 200, fontSize: 16, marginRight: 20 }}
          onChange={handleFilterChange}
        >
          {coursesName.map((ele, i) => (
            <Option key={i} value={ele.name}>
              {ele.name}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="Instructors"
          style={{ width: 200, fontSize: 16 }}
          onChange={handleFilterChange}
        >
          {instructorName.map((ele, i) => (
            <Option key={i} value={ele.instructorName}>
              {ele.instructorName}
            </Option>
          ))}
        </Select>
      </div>
      <Table dataSource={lectures} columns={columns} />
    </>
  );
};
