import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addJobs } from "../../features/jobs/jobSlice";

export default function Form() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reset = () => {
    setTitle("");
    setType("");
    setSalary("");
    setDeadline("");
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(addJobs({ title, type, salary, deadline }));
    reset();
    navigate("/");
  };

  return (
    <form className="space-y-6" onSubmit={handleCreate}>
      <div className="fieldContainer">
        <label
          htmlFor="lws-JobTitle"
          className="text-sm font-medium text-slate-300"
        >
          Job Title
        </label>
        <select
          id="lws-JobTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="lwsJobTitle"
          required
        >
          <option value="" hidden>
            Select Job
          </option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="MERN Stack Developer">MERN Stack Developer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Social Media Manager">Social Media Manager</option>
          <option value="Senior Executive">Senior Executive</option>
          <option value="Junior Executive">Junior Executive</option>
          <option value="Android App Developer">Android App Developer</option>
          <option value="IOS App Developer">IOS App Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobType">Job Type</label>
        <select
          id="lws-JobType"
          value={type}
          onChange={(e) => setType(e.target.value)}
          name="lwsJobType"
          required
        >
          <option value="" hidden>
            Select Job Type
          </option>
          <option value="Full Time">Full Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobSalary">Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            type="number"
            name="lwsJobSalary"
            id="lws-JobSalary"
            required
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobDeadline">Deadline</label>
        <input
          type="date"
          name="lwsJobDeadline"
          id="lws-JobDeadline"
          required
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          id="lws-submit"
          className="cursor-pointer btn btn-primary w-fit"
        >
          save
        </button>
      </div>
      {/* {isError?} */}
    </form>
  );
}
