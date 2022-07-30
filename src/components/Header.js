import React from "react";
import Search from "./Search";

function Header( {listOfItems, setListing}) {

  function handleSearch(searchedItem) {
    const updatedListing = listOfItems.filter(item => item.description.includes(searchedItem))
    setListing(updatedListing)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={handleSearch}/>
    </header>
  );
}

export default Header;
