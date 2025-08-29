import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      className="form-control mb-4"
      placeholder="Search recipes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
