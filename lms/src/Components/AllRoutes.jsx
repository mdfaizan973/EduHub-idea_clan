import Login from "../Pages/Login";
import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/admindashboard" element={<AdminDashboard />}></Route>
      </Routes>
    </div>
  );
}
