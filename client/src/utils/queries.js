import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      title
      image
      price
      review
    }
  }
`;
