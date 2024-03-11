import { Card } from "flowbite-react";
import "../../assets/css/pages.css";

function CourseCard({ course }) {
  return (
    <div className="bg-white w-[500px] w-sm flex justify-center m-2">
      <Card className=" p-3 " imgSrc="/src/assets/images/bg2.jpg" horizontal>
        <h5 className="text-3xl font-para tracking-tight text-gray-900 dark:text-white">
          {course.courseName}
        </h5>
        <p className=" font-para font-normal text-gray-700 dark:text-gray-400">
          <b>Course Description </b>: {course.courseDescription}
        </p>
        <p className=" font-para font-normal text-gray-700 dark:text-gray-400">
          <b>Course Duration </b>: {course.creditHours} hours
        </p>
      </Card>
    </div>
  );
}

export default CourseCard;
