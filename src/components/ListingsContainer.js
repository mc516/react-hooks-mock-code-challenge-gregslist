import React, { useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listOfItems, setListOfItems }) {

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListOfItems(data))
  }, [])

  function handleDeleteItem(deletedItem) {
    const updatedListing = listOfItems.filter(item => item.id !== deletedItem.id)
    setListOfItems(updatedListing);
  }

  const itemsToDisplay = listOfItems.filter(item => {return true})

  return (
    <main>
      <ul className="cards">
        { itemsToDisplay.map(item => {return <ListingCard key={item.id} listedItem={item} onDeleteItem={handleDeleteItem}/>}) }
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
