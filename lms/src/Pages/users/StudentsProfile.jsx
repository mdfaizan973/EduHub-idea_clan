import Navbar from "./Navbar";
import { Card, Avatar, Tag } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
// import { EditOutlined } from "@ant-design/icons";
export default function StudentsProfile() {
  const user_id = sessionStorage.getItem("lmscurrentstudent");
  const [getUser, setGetuser] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users/users")
      .then((res) => {
        const users = res.data;
        const user = users.find((user) => user._id === user_id);
        if (user) {
          // console.log("User data:", user);
          setGetuser(user);
        } else {
          console.log("User not found");
        }
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });
  }, [user_id]);
  console.log(getUser);
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
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Card
          style={{ border: "1px dotted grey" }}
          className="profile-card"
          hoverable
        >
          <div className="profile-header">
            <Avatar
              style={{ border: "1px dotted grey" }}
              src="https://i.pinimg.com/564x/06/70/0e/06700e92fe099af7ee9148a07b435c9c.jpg"
              size={150}
              hoverable
            />
            <h1>Name: {getUser.name.toUpperCase()}</h1>
          </div>
          <div className="profile-content" style={{ lineHeight: "2" }}>
            <p>
              <strong>Email:</strong> {getUser.email}
            </p>
            <p>
              <strong>Password:</strong> {getUser.password}
            </p>
            <p>
              <strong>Courses:</strong>
            </p>
            {getUser.courses.map((course, index) => (
              <Tag key={index} style={{ margin: "15px" }} color="blue">
                {course}
              </Tag>
            ))}
            {/* <Button
              style={{ marginTop: "20px" }}
              type="primary"
              icon={<EditOutlined />}
            >
              Update Profile
            </Button> */}
          </div>
        </Card>
        <div
          style={{
            width: "70%",
            margin: "50px auto",
            borderRadius: "10px",
            backgroundColor: "#fff",
            padding: "10px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid green",
          }}
        >
          <h3>Yha pe Updata Form Rahega</h3>
        </div>
      </div>
    </div>
  );
}
