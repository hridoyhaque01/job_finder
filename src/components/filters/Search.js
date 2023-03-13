import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterBySearch } from "../../features/filter/filterSlice";

export default function Search() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterBySearch(input));
  }, [dispatch, input]);

  return (
    <div className="search-field group flex-1">
      <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
      <input
        type="text"
        placeholder="Search Job"
        className="search-input"
        id="lws-searchJob"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
