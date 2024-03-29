const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const port = 3080;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://seshasaikothapalli1350:seshasai1@cluster0.f7trzzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const pricingRoutes = require("./Routes/PriceRoutes.js");
app.use("/", pricingRoutes);
app.listen(port, () => {
  console.log(`Server is Running on the port ${port}`);
});
