const mongoose = require("mongoose");

const DeliverySchema = new mongoose.Schema({
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
  baseDistanceInKm: {
    type: Number,
    required: true,
  },
  kmPrice: {
    type: Number,
    required: true,
  },
  fixPrice: {
    type: Number,
    required: true,
  },
});

const Pricing = mongoose.model("Pricing", DeliverySchema);

module.exports = Pricing;
