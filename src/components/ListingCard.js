import React, { useState } from "react";


function ListingCard( {listedItem, onDeleteItem} ) {

  const {id, description, image, location} = listedItem;
  const [isLiked, setIsliked] = useState(false)

  function handleLikeToggle() {
    setIsliked((isLiked) => !isLiked)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(item => onDeleteItem(item))
  }

  return (
    <li className="card" value={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" >
        {isLiked ? (
          <button className="emoji-button favorite active" onClick={handleLikeToggle}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLikeToggle}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location} </span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
