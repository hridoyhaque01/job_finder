import React from "react";
import Filters from "../components/filters/Filters";
import Joblist from "../components/jobs/Joblist";

export default function Home() {
  return (
    <>
      <Filters />
      <Joblist />
    </>
  );
}
