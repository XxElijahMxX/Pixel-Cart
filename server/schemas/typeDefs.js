// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Product {
    _id: ID
    title: String
    image: String
    price: Float
    review: Int
  }

  type Query {
    products: [Product]
  }

  type Mutation {
    addProduct(
      title: String!
      image: String!
      price: Float!
      review: Int!
    ): Product
  }
`;

// export the typeDefs
module.exports = typeDefs;

//Get all products query
// query getProducts{
//     products {
//       _id
//       title
//       image
//       price
//       review
//     }
//   }
//
// Add product mutation
// mutation addProduct($title: String!, $image: String!, $review: Int!, $price: Float!) {addProduct(title: $title, image: $image, price: $price, review: $review) {
//     _id
//     title
//     price
//     review
//     image
//   }
//   }
