import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listing, setListing] = useState([])

  return (
    <div className="app">
      <Header listOfItems={listing} setListing={setListing}/>
      <ListingsContainer listOfItems={listing} setListOfItems={setListing}/>
    </div>
  );
}

export default App;
