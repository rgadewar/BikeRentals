import { gql } from '@apollo/client';

// Create a new bike
export const CREATE_BIKE = gql`
  mutation CreateBike($input: BikeInput!) {
    createBike(input: $input) {
      _id
      name
      price
      rating
      image
      details {
        capacity
        productInfo
      }
    }
  }
`;

// Update an existing bike
export const UPDATE_BIKE = gql`
  mutation UpdateBike($_id: ID!, $input: BikeInput!) {
    updateBike(_id: $_id, input: $input) {
      _id
      name
      price
      rating
      image
      details {
        capacity
        productInfo
      }
    }
  }
`;

// Delete a bike
export const DELETE_BIKE = gql`
  mutation DeleteBike($_id: ID!) {
    deleteBike(_id: $_id) {
      _id
      name
    }
  }
`;
