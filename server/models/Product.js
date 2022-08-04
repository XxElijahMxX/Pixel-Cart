const { convertNodeHttpToRequest } = require("apollo-server-core");
const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    // id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    // },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    review: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
