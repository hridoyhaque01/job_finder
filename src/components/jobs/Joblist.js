import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/jobs/jobSlice";
import JoblistItem from "./JoblistItem";

export default function Joblist() {
  const { jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );
  const { search, sort, type } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // filter by search

  const filterBySearch = (job) => {
    if (search.trim().length > 0) {
      return job.title.toLowerCase().includes(search);
    } else {
      return true;
    }
  };

  // filter by type

  const filterByType = (job) => {
    if (type !== "all") {
      return job.type === type;
    } else {
      return true;
    }
  };

  const sorted = () => {
    switch (sort) {
      case "Salary (Low to High)":
        return jobs.slice().sort((a, b) => {
          const salaryA = Number(a.salary);
          const salaryB = Number(b.salary);
          return salaryA - salaryB;
        });
      case "Salary (High to Low)":
        return jobs.slice().sort((a, b) => {
          const salaryA = Number(a.salary);
          const salaryB = Number(b.salary);
          return salaryB - salaryA;
        });
      default:
        return jobs;
    }
  };

  //decide what to render

  let content = null;

  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && isError) content = <p>{error}</p>;

  if (!isLoading && !isError && jobs?.length === 0)
    content = <p>No Jobs Found!</p>;

  if (!isLoading && !isError && jobs?.length > 0) {
    const sortedJobs = sorted();
    const checkSearch = sortedJobs.filter(filterBySearch).length;

    if (checkSearch > 0) {
      content = sortedJobs
        .filter(filterByType)
        .filter(filterBySearch)
        .map((job) => <JoblistItem key={job.id} job={job} />);
    } else {
      content = "No Search Result Found!";
    }
  }

  return <div className="jobs-list">{content}</div>;
}
