import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeJobs } from "../../features/jobs/jobSlice";
import numberWithCommas from "../../utils/numberWithCommas";

export default function JoblistItem({ job }) {
  const { id, title, type, salary, deadline } = job;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const routeHandler = () => {
    navigate(`jobEdit/${id}`);
  };

  const deleteHandler = () => {
    dispatch(removeJobs(id));
  };

  const color =
    type === "Remote"
      ? "#56E5C4"
      : type === "Internship"
      ? "#FF5757"
      : "#FF8A00";

  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
            <i
              className={`fa-solid fa-stop !text-[${color}] text-lg mr-1.5`}
            ></i>
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {numberWithCommas(salary)}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="lws-edit btn btn-primary"
            onClick={routeHandler}
          >
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
            Edit
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            className="lws-delete btn btn-danger "
            onClick={deleteHandler}
          >
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
}
