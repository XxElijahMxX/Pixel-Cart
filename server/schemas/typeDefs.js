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
    addProduct(title: String! image: String! price: Float! review: Int!): Product
    removeProduct(_id: String!): Product
  }
`;

// export the typeDefs
module.exports = typeDefs;

