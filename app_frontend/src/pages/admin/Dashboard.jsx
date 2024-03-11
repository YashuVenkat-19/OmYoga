import React from "react";
import SideBar from "./SideBar";
import "../../assets/css/admin.css";
import Table from "./Table";
import BannerComp from "./Banner";

const Dashboard = () => {
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
              <div className="grid grid-cols-2 gap-4">
                <BannerComp value={5} text={"Number of Institutes"} />
                <BannerComp value={25} text={"Number of Courses"} />
              </div>
            </div>
          </div>
          <Table />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
