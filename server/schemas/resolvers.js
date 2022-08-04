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
    removeProduct: async (parent, args) => {
        const product = Product.deleteOne({_id: {$eq: args._id}})

        return product;
    }
  },
};

module.exports = resolvers;
