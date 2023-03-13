import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortBySalary } from "../../features/filter/filterSlice";

export default function Sorted() {
  const { sort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const sortHandler = (event) => {
    const sortValue = event.target.value;
    dispatch(sortBySalary(sortValue));
  };

  return (
    <select
      id="lws-sort"
      name="sort"
      autoComplete="sort"
      className="flex-1"
      value={sort}
      onChange={sortHandler}
    >
      <option value="Default">Default</option>
      <option value="Salary (Low to High)">Salary (Low to High)</option>
      <option value="Salary (High to Low)">Salary (High to Low)</option>
    </select>
  );
}
