import React from "react";
import SideBar from "./SideBar";
import BannerComp from "./Banner";
import "../../assets/css/admin.css";
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";

const CreateCourse = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [courseData, setCourseData] = useState({
    courseId: 0,
    courseName: "",
    courseDescription: "",
    courseCode: "",
    creditHours: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/api/v1/courses",
        courseData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Course created:", response.data);
      // Handle success, reset form, or navigate to another page
      setToastMessage("Course Created Successfully!");
      setShowToast(true); // Show toast message
      setTimeout(() => {
        setShowToast(false); // Hide toast message after 3 seconds
      }, 3000);
    } catch (error) {
      console.error("Error creating course:", error);
      // Handle error
    }
  };
  return (
    <>
      <div className="admin-page-blur-container">
        <div className="content-container">
          <SideBar />
          <div className="pl-64">
            <div className="p-2">
              <svg
                className="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                // fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              {/* <div className="grid grid-cols-2 gap-4">
                <BannerComp value={5} text={"Number of Institutes"} />
                <BannerComp value={25} text={"Number of Courses"} />
              </div> */}
              <div className="p-2 mt-4 flex-row justify-center">
                <h1 className="text-3xl font-para font-bold tracking-tight text-green-700 dark:text-white">
                  Create Course
                </h1>
                <div className="p-2 border-2 flex justify-center border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-4">
                  <form
                    onSubmit={handleSubmit}
                    className="w-[100%] flex flex-col font-para gap-4"
                  >
                    <div>
                      <div className="mb-1 block">
                        <Label
                          htmlFor="courseName"
                          className="text-lg font-bold text-green-600"
                          value="Course Name"
                        />
                      </div>
                      <TextInput
                        id="courseName"
                        name="courseName"
                        type="text"
                        value={courseData.courseName}
                        onChange={handleChange}
                        placeholder="Yoga Course"
                        className="text-lg font-bold text-black"
                        required
                      />
                    </div>
                    <div>
                      <div className="mb-1 block">
                        <Label
                          htmlFor="courseDescription"
                          className="text-lg font-bold text-green-600"
                          value="Course Description"
                        />
                      </div>
                      <TextInput
                        id="courseDescription"
                        name="courseDescription"
                        type="text"
                        value={courseData.courseDescription}
                        onChange={handleChange}
                        placeholder="All aasans are covered"
                        className="text-lg font-bold text-black"
                        required
                      />
                    </div>
                    <div>
                      <div className="mb-1 block">
                        <Label
                          htmlFor="courseHours"
                          className="text-lg font-bold text-green-600"
                          value="Course Hours"
                        />
                      </div>
                      <TextInput
                        id="courseHours"
                        name="creditHours"
                        type="number"
                        value={courseData.creditHours}
                        onChange={handleChange}
                        className="text-lg font-bold text-black"
                        placeholder="2"
                        required
                      />
                    </div>
                    <div>
                      <div className="mb-1 block">
                        <Label
                          htmlFor="courseCode"
                          className="text-lg font-bold text-green-600"
                          value="Course Code"
                        />
                      </div>
                      <TextInput
                        id="courseCode"
                        name="courseCode"
                        type="text"
                        value={courseData.courseCode}
                        onChange={handleChange}
                        className="text-lg font-bold text-black"
                        placeholder="101"
                        required
                      />
                    </div>

                    <Button type="submit" className="bg-green-600">
                      Create
                    </Button>
                  </form>
                  {showToast && (
                    <div className="absolute ml-96 m-24 transform -translate-x-1/2 text-2xl bg-green-600 flex items-center justify-center border-4 border-green-300 border-solid w-80 text-center pt-4 font-para h-32 text-white p-8 rounded-lg shadow-[0_30px_60px_rgba(8,_112,_184,_0.7)]  transition-all duration-500">
                      {toastMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCourse;
