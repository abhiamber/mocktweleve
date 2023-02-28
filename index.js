const express = require("express");
const app = express();
require("dotenv").config();
let conncet = require("./config/db");
let PORT = process.env.PORT || 8080;
app.use(express.json());
let cors = require("cors");
app.use(cors());
let prodRoutes = require("./routes/prod.routes");
app.use("/prod", prodRoutes);

app.get("/", async (req, res) => {
  try {
    res.send("hurray............");
  } catch (e) {
    res.send(e.message);
  }
});

app.listen(PORT, async () => {
  await conncet();
  console.log("server is working");
});
