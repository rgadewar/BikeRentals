const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Bike {
    _id: ID
    name: String
    price: Float
    rating: Float
    image: String
    details: BikeDetails
  }

  type BikeDetails {
    capacity: String
    productInfo: String
  }

  type Query {
    bikes: [Bike]
    bike(_id: ID!): Bike
  }

  type Mutation {
    createBike(input: BikeInput): Bike
    updateBike(_id: ID!, input: BikeInput): Bike
    deleteBike(_id: ID!): Bike
  }

  input BikeInput {
    name: String
    price: Float
    rating: Float
    image: String
    details: BikeDetailsInput
  }

  input BikeDetailsInput {
    capacity: String
    productInfo: String
  }
`;

module.exports = typeDefs;
