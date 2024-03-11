import { React, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LazyLayout from "./components/LazyLayout";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Error from "./pages/auth/Error";
import Home from "./pages/user/Home";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/admin/Dashboard";
import NavBar from "./pages/user/Navbar";
import AdminLogin from "./pages/auth/AdminLogin";
import About from "./pages/user/About";
import Explore from "./pages/user/Explore";
import "../src/assets/css/login.css";
import AdminCourses from "./pages/admin/AdminCourses";
import CreateCourse from "./pages/admin/CreateCourse";
import AllUser from "./pages/admin/AllUser";

const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyAbout = lazy(() => import("./pages/user/About"));
const LazyLogin = lazy(() => import("./pages/auth/Login"));
const LazyRegister = lazy(() => import("./pages/auth/Register"));
const LazyDashboard = lazy(() => import("./pages/admin/Dashboard"));
const LazyAllUser = lazy(() => import("./pages/admin/AllUser"));

// const UserRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/home" element={<LazyLayout component={LazyHome} />} />
//       <Route path="/about" element={<LazyLayout component={LazyAbout} />} />
//     </Routes>
//   );
// };

// const AdminRoutes = () => {
//   return (
//     <Routes>
//       <Route
//         path="/dashboard"
//         element={<LazyLayout component={LazyDashboard} />}
//       />
//       <Route path="/allUser" element={<LazyLayout component={LazyAllUser} />} />
//     </Routes>
//   );
// };

const Loader = () => {
  return (
    <>
      <div className="loader">Loading....</div>
      <div className="loader">Loading....</div>
      <div className="loader">Loading....</div>
      <div className="loader">Loading....</div>
      <div className="loader">Loading....</div>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/yoga-academy/login" />} />
      <Route path="/yoga-academy/login" element={<Login />} />
      <Route path="/yoga-academy/admin-login" element={<AdminLogin />} />
      <Route path="/yoga-academy/register" element={<Register />} />
      <Route path="/yoga-academy/home" element={<Home />} />
      <Route path="/yoga-academy/about" element={<About />} />
      <Route path="/yoga-academy/profile" element={<Profile />} />
      <Route path="/yoga-academy/explore" element={<Explore />} />
      <Route path="/yoga-academy/navbar" element={<NavBar />} />
      <Route path="/yoga-academy/dashboard" element={<Dashboard />} />
      <Route path="/yoga-academy/admin-courses" element={<AdminCourses />} />
      <Route path="/yoga-academy/create-courses" element={<CreateCourse />} />
      <Route path="/yoga-academy/all-users" element={<AllUser />} />

      {/* <Route path="/yoga-academy/user/*" element={<UserRoutes />} />
      <Route path="/yoga-academy/admin/*" element={<AdminRoutes />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
