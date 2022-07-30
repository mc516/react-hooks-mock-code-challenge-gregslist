import React from "react";

function Search({ onSearch, search, setSearch }) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSearch(search)
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
