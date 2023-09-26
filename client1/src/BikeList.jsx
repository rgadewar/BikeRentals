import React from 'react';
import Bike from './Bike'; // Assuming your bike card component is named "Bike"
import './BikeList.css';

export default function BikeList({ properties }) {
  const [selectedBikeId, setSelectedBikeId] = React.useState(null);

  // Function to handle bike card click
  const handleBikeClick = (bikeId) => {
    setSelectedBikeId(bikeId);
  };

  // Function to render bike details
  const renderBikeDetails = () => {
    const selectedBike = properties.find((p) => p.id === selectedBikeId);
    if (!selectedBike) return null;

    return (
      <div className="DetailsCard">
        <h2>{selectedBike.name} Details</h2>
        <p>Capacity: {selectedBike.details.capacity}</p>
        <p>Description: {selectedBike.details.productInfo}</p>
        <button onClick={() => setSelectedBikeId(null)}>Close</button>
      </div>
    );
  };

  return (
    <div className="BikeList">
      {properties.map((p) => (
        <div key={p.id} className="BikeCard">
          <Bike {...p} onViewDetails={() => handleBikeClick(p.id)} />
        </div>
      ))}

      {/* Render the details card when a bike is selected */}
      {selectedBikeId !== null && renderBikeDetails()}
    </div>
  );
}
