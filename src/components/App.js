import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listing, setListing] = useState([])

  return (
    <div className="app">
      <Header />
      <ListingsContainer listOfItems={listing} setListOfItems={setListing}/>
    </div>
  );
}

export default App;
