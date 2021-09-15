import React from "react";
import { useState, useEffect } from "react";
import JobList from "./JobList";
export const Home = (props) => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    console.log("e" + props.searchQuery);
    if (props.searchQuery) {
      try {
        const response = await fetch(
          "https://strive-jobs-api.herokuapp.com/jobs?title=" +
            props.searchQuery
        );
        if (response.ok) {
          const fetchedJobs = await response.json();
          console.log(fetchedJobs.data);
          setJobs(fetchedJobs.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchWithCategory = async () => {
    console.log("c" + props.searchCategory);
    if (props.searchCategory) {
      try {
        const response = await fetch(
          "https://strive-jobs-api.herokuapp.com/jobs?category=" +
            props.searchCategory
        );
        if (response.ok) {
          const fetchedJobs = await response.json();
          console.log("fetchedCategory=", fetchedJobs.data);
          setJobs(fetchedJobs.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchWithCategory();
    fetchJobs();
  }, [props.searchQuery, props.searchCategory]);

  return (
    <div className="mt-5">
      {jobs
        .filter(
          (job, i) =>
            /* job.company_name.toLowerCase().includes(props.searchQuery) && */ i <
            20
        )
        .map((job) => (
          <JobList key={job._id} job={job} />
        ))}
    </div>
  );
};
