const Product = require("../models/Product");

const resolvers = {
  Query: {
    products: async () => {
      return Product.find();
    },
  },
  Mutation: {
    addProduct: async (parent, args) => {
      const product = Product.create(args);

      return product;
    },
  },
};

module.exports = resolvers;
