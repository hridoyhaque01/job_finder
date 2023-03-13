import React from "react";
import Search from "./Search";
import Sorted from "./Sorted";

export default function FIlters() {
  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <Search />
        <Sorted />
      </div>
    </div>
  );
}
