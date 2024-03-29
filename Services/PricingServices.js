const Pricing = require("../models/DeliveryModel");

async function calculatePrice(zone, organizationId, totalDistance, itemType) {
  const pricing = await Pricing.findOne({
    organization: organizationId,
    zone,
  });

  let totalPrice = pricing.fixPrice;
  if (totalDistance > pricing.baseDistanceInKm) {
    totalPrice += (totalDistance - pricing.baseDistanceInKm) * pricing.kmPrice;
  }

  return totalPrice;
}

module.exports = { calculatePrice };
