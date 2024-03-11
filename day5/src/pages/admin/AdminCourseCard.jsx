import { Card } from "flowbite-react";
import "../../assets/css/pages.css";
import axios from "axios";

function AdminCourseCard({ course }) {
  console.log(course);
  async function EnrollTocourse(courseId) {
    tconsole.log("Coures");
  }
  return (
    <div className="bg-white w-[480px] w-sm flex justify-center  m-2">
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
            className="p-1 m-1 text-white  bg-green-600 rounded-lg font-para text-xl justify-end"
          >
            View Users
          </button>
          <button
            onClick={() => EnrollTocourse(course.courseId)}
            className="p-1 m-1 text-white  bg-green-600 rounded-lg font-para text-xl justify-end"
          >
            Edit
          </button>
        </div>
      </Card>
    </div>
  );
}

export default AdminCourseCard;
