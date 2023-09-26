import { gql } from '@apollo/client';

export const GET_BIKES = gql`
  query GetBikes {
    bikes {
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
