import { Card } from "flowbite-react";
import "../../assets/css/pages.css";
import axios from "axios";

function CourseCardWithOpt({ course }) {
  console.log(course);
  async function EnrollTocourse(courseId) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/api/v1/courses/optForCourse",
        { courseId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Assuming response.data contains the result of the optForCourse operation
      return response.data;
    } catch (error) {
      console.error("Error opting for course:", error);
      throw error; // Propagate the error to the caller
    }
  }
  return (
    <div className="bg-white w-[500px] w-sm flex justify-center  m-2">
      <Card className=" p-3" imgSrc="/src/assets/images/bg2.jpg" horizontal>
        <h5 className="text-3xl font-para tracking-tight text-gray-900 dark:text-white">
          {course.courseName}
        </h5>
        <p className=" font-para font-normal text-gray-700 dark:text-gray-400">
          <b>Course Description </b>: {course.courseDescription}
        </p>
        <p className=" font-para font-normal text-gray-700 dark:text-gray-400">
          <b>Course Duration </b>: {course.creditHours} hours
        </p>
        <div className="ml-3 pt-4 flex justify-end ">
          <button
            onClick={() => EnrollTocourse(course.courseId)}
            className="p-2   text-white  bg-sky-600 rounded-lg font-para text-xl justify-end"
          >
            Enroll
          </button>
        </div>
      </Card>
    </div>
  );
}

export default CourseCardWithOpt;
