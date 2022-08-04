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


//Remove product mutation
// mutation removeProduct($id: String!) {removeProduct(id: $id) {
//     _id
//     title
//     price
//     review
//     image
//   }
//   }
  
  