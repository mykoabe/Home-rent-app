const mongoose = require("mongoose");
const orderFields = {
  name: {
    type: String,
  },
  location: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: [Number],
    name: {
      type: String,
    },
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  houseType: {
    type: String,
    enum: ["sell", "rent"],
    default: "rent",
  },
  category: {
    type: String,
    enum: ["Luxury Appartment", "Appartment", "Office Space", "Condominium"],
    default: "Appartment",
  },
  images: [
    {
      type: String,
      default: "default.png",
    },
  ],
  roomNo: {
    type: Number,
  },
  floorNo: {
    type: Number,
  },
  state: {
    type: String,
  },
  subCity: {
    type: String,
  },
  woreda: {
    type: String,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
};

const AppartmentSchema = new mongoose.Schema(orderFields, { timestamps: true });
module.exports = mongoose.model("Appartment", AppartmentSchema);
