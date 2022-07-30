import React, {useState} from "react";
import Search from "./Search";

function Header( {listOfItems, setListing}) {

  const [search, setSearch] = useState("")

  function handleSearch(searchedItem) {    
    const updatedListing = listOfItems.filter(item => {
      if (search == "") {
        return item
      } else if (item.description.toLowerCase().includes(searchedItem.toLowerCase())) {
        return item
      }
    })
    setListing(updatedListing)
    setSearch("")
  }

    
    
    // }item.description.includes(searchedItem))
    // setListing(updatedListing)
   
 

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={handleSearch} search={search} setSearch={setSearch}/>
    </header>
  );
}

export default Header;
