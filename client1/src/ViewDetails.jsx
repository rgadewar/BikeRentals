import React from 'react';

export default function ViewDetails({ bike }) {
  return (
    <div className="DetailsContainer">
      <h2>Details for {bike.name}</h2>
      <div className="Details">
        <p><strong>Capacity:</strong> {bike.details.capacity}</p>
        <p><strong>Product Information:</strong> {bike.details.productInfo}</p>
      </div>
    </div>
  );
}
