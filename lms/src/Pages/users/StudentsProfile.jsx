import Navbar from "./Navbar";
import { Card, Avatar, Button, Tag } from "antd";

// import { EditOutlined } from "@ant-design/icons";
export default function StudentsProfile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "7890",
    courses: ["React.js", "Node.js", "Express.js"],
    image: "https://example.com/profile-image.jpg",
  };
  const { name, email, phone, courses } = user;
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
          //   border: "1px solid green",
          //   justifyContent: "center",
          //   alignItems: "center",
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
            <h1>{name}</h1>
          </div>
          <div className="profile-content" style={{ lineHeight: "2" }}>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Password:</strong> {phone}
            </p>
            <p>
              <strong>Courses:</strong>
            </p>
            {courses.map((course, index) => (
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
