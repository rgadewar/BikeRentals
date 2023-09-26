import React from 'react';
import { useQuery } from '@apollo/client'; // Import useQuery hook
import { GET_BIKES } from './utils/queries'; // Import your GraphQL query
import Bike from './Bike'; // Assuming your bike card component is named "Bike"
import './BikeList.css';

export default function BikeList() {
  // Use the useQuery hook to fetch bike data with the GET_BIKES query
  const { loading, error, data } = useQuery(GET_BIKES);

  // Log loading, error, and data for debugging
  console.log('loading:', loading);
  console.log('error:', error);
  console.log('data:', data);

  // Display a loading message while data is being fetched
  if (loading) return <p>Loading...</p>;

  // Handle errors by displaying an error message
  if (error) return <p>Error: {error.message}</p>;

  // Extract the bikes data from the query result
  const bikes = data.bikes;

  // Check if there are no bikes available and display a message
  // if (!bikes || !bikes.length) {
  //   return <p>No bikes available.</p>;
  // }

  const [selectedBikeId, setSelectedBikeId] = React.useState(null);

  // Function to handle bike card click
  const handleBikeClick = (bikeId) => {
    setSelectedBikeId(bikeId);
  };

  // Function to render bike details
  const renderBikeDetails = () => {
    const selectedBike = bikes.find((bike) => bike._id === selectedBikeId);
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
      {/* Map through the bikes data and render Bike components */}
      {bikes.map((bike) => (
        <div key={bike._id} className="BikeCard" onClick={() => handleBikeClick(bike._id)}>
          <Bike {...bike} />
        </div>
      ))}

      {/* Render the details card when a bike is selected */}
      {selectedBikeId !== null && renderBikeDetails()}
    </div>
  );
}
