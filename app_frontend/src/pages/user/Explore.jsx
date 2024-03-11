import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "../../assets/css/login.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseCardWithOpt from "./CourseCardWithOpt";

const Explore = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8080/api/v1/courses/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCourses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <>
      <div>
        <div className="blur-container">
          <div className="content-container">
            <NavBar />
            <div className="mt-40">
              <h1 className="text-4xl font-head  text-center">
                Explore Zenvista Courses
              </h1>
              <p className="mt-10 mx-6 font-para sm:mx-20 md:mx-40 lg:mx-60 text-center text-lg">
                Discover a diverse array of yoga courses tailored to every level
                and interest at our academy. From beginner basics to advanced
                practices, explore a range of styles including Hatha, Vinyasa,
                and Kundalini yoga. Elevate your practice and deepen your
                understanding with expert guidance and immersive experiences.
              </p>
              <div className="flex flex-wrap justify-center mt-8">
                {courses.map((course) => (
                  <CourseCardWithOpt key={course.courseId} course={course} />
                ))}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
