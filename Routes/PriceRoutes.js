const express = require("express");
const router = express.Router();
const { calculatePrice } = require("../Services/PricingServices");

router.post("/price", async (req, res) => {
  try {
    const { zone, organizationId, totalDistance, itemType } = req.body;
    const totalPrice = await calculatePrice(
      zone,
      organizationId,
      totalDistance,
      itemType
    );
    res.json({ total_price: totalPrice });
  } catch (error) {
    console.error("Error calculating price:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
