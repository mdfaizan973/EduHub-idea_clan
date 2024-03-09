import Navbar from "./Navbar";
import { Link as RouterLink } from "react-router-dom";
import { Card, Button, Tag } from "antd";
import { Input, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
const { Search } = Input;
const { Option } = Select;
export default function StudentsDashboard() {
  // const lectures = [{}, {}];
  const user_id = sessionStorage.getItem("lmscurrentstudent");
  // const [studentCourse, setStudentCourse] = useState([]);
  const [userlectures, setUserLectures] = useState([]);

  const getUsersCourses = () => {
    axios
      .get(`http://localhost:3000/api/users/users`)
      .then((res) => {
        const users = res.data;
        const user = users.find((user) => user._id === user_id);
        if (user) {
          // setStudentCourse(user.courses);
          axios
            .get(`http://localhost:3000/api/lectures`)
            .then((res) => {
              const lectures = res.data;
              const matchedLectures = lectures.filter((lecture) =>
                user.courses.some((course) => course === lecture.lectureName)
              );
              console.log(matchedLectures);
              setUserLectures(matchedLectures);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log("studentCourse", studentCourse);

  // Funcationalaties
  const handleSearch = (value) => {
    console.log("Search value:", value);
  };

  const handleFilterChange = (value) => {
    console.log("Filter value:", value);
  };

  useEffect(() => {
    getUsersCourses();
  }, []);

  return (
    <div>
      <Navbar />

      <div
        style={{
          width: "75%",
          margin: "50px auto",
          borderRadius: "10px",
          backgroundColor: "#fff",
          padding: "10px",
          height: "90vh",
        }}
      >
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
            placeholder="Filter"
            style={{ width: 200, fontSize: 16, marginRight: 20 }}
            onChange={handleFilterChange}
          >
            <Option value="option1">Course</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
          <Select
            placeholder="Filter"
            style={{ width: 200, fontSize: 16 }}
            onChange={handleFilterChange}
          >
            <Option value="option1">Instructor</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
        </div>
        {userlectures.map((ele, i) => (
          <Card key={i} className="horizontal-card" hoverable>
            <div className="card-content">
              <div className="image-container">
                <img
                  className="image_container_image"
                  alt="image"
                  src="https://students.masaischool.com/static/media/openBookImage.95b8e8b4378306339c056f175c2f9b66.svg"
                />
              </div>
              <div className="details">
                <h3>
                  {ele.lectureTitle}{" "}
                  <Tag color="volcano">{ele.instructorName}</Tag>
                </h3>
                <Tag style={{ fontSize: "15px" }} color="cyan">
                  {ele.lectureName}
                </Tag>
                <Tag>
                  {ele.startTime} - {ele.endTime}
                </Tag>
              </div>
              <div className="join-button">
                <RouterLink target="_blank" to={ele.classLink}>
                  <Button type="primary">Join</Button>
                </RouterLink>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
