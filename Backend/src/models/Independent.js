const mongoose = require("mongoose");
const independentFields = {
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
    enum: ["Farm house", "Individual Villa", "Modern Home", "Town House"],
    default: "Farm house"
  },
  image: {
    type: String,
    default: "default.png",
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

const IndependentSchema = new mongoose.Schema(independentFields, {
  timestamps: true,
});
module.exports = mongoose.model("Independent", IndependentSchema);
