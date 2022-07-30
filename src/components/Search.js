import React, { useState } from "react";

function Search({ listOfItems,setListing, onSearch }) {

  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search)
    console.log("submitted");
  }

  function handleSearchChange(e) {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
