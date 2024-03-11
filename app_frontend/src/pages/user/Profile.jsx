import React from "react";
import NavBar from "./Navbar";
import MyFooter from "./Footer";
import "../../assets/css/pages.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming you store the token in localStorage after login
        const response = await axios.get(
          "http://localhost:8080/api/v1/users/user-details",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        // Handle error (e.g., redirect to login page)
      }
    };

    fetchUserDetails();
  }, []);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8080/api/v1/course",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCourses(response.data);
        console.log(response.data);
        console.log(courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <>
      <div className="blur-container">
        <div className="content-container">
          <NavBar />
          <div className="mt-20 font-para flex justify-start p-24">
            <div className="text-3xl m-1 justify-start">
              Hello{" "}
              {userDetails && (
                <p className="p-4 font-bold" style={{ fontSize: "75px" }}>
                  {userDetails.user.name},
                </p>
              )}
            </div>
          </div>

          <div className="mt-12 font-para flex justify-center">
            {userDetails && (
              <div className="flex justify-start flex-col text-2xl">
                <p className="p-2">Name : {userDetails.user.name}</p>
                <p className="p-2">Email : {userDetails.user.email}</p>
                <p className="p-2">Role : {userDetails.mobileNumber}</p>
              </div>
            )}
          </div>
          <div>{/* <CourseCard /> */}</div>
          <div className="flex flex-wrap justify-center mt-8">
            {courses.map((course) => (
              <CourseCard key={course.courseId} course={course} />
            ))}
          </div>
          <MyFooter />
        </div>
      </div>
    </>
  );
};

export default Profile;
