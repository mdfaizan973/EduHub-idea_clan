import Login from "../Pages/Login";
import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}
