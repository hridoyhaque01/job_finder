import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Form from "../components/editForm/Form";
import { fetchJob } from "../features/jobs/jobSlice";

export default function Edit() {
  const { job, isLoading, isError, error } = useSelector((state) => state.jobs);
  const { jobId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJob(jobId));
  }, [dispatch, jobId]);

  // decide what to render

  let content = null;

  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError) content = <p>{error}</p>;

  if (!isLoading && !isError && !job?.id) content = <p>Something is wrong</p>;

  if (!isLoading && !isError && job?.id) {
    content = <Form content={job} />;
  }

  return (
    <>
      <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

      <div className="max-w-3xl mx-auto">{content}</div>
    </>
  );
}
