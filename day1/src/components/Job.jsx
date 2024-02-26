import { useState } from "react";
import "../assets/Job.css";

import AdminNav from "./AdminNav";

function ViewJobs() {
  // Mock job data
  const mockJobs = [
    {
      id: 1,
      title: "Pranayama",
      description: "Yoga for 3 months",
      location: "New York",
      salary: "$100,000",
    },
    {
      id: 2,
      title: "Aathma yoga",
      description: "Course for 3 months.",
      location: "San Francisco",
      salary: "$120,000",
    },
    {
      id: 3,
      title: "Valliyemmey",
      description: "Course for 3 months.",
      location: "Los Angeles",
      salary: "$90,000",
    },
    {
      id: 4,
      title: "Sendhan amudha",
      description: "Course for 3 months.",
      location: "Chicago",
      salary: "$95,000",
    },
    // Add more mock job data as needed
  ];

  const [jobs, setJobs] = useState(mockJobs);

  // Function to handle job deletion
  const handleDelete = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  return (
    <>
      <AdminNav />
      <div className="view-jobs-container">
        <h2>
          <center>Available Theme couses</center>
        </h2>
        <div className="job-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>Location: {job.location}</p>
              <p>Fee: {job.salary}</p>
              <button className="dbt" onClick={() => handleDelete(job.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewJobs;
