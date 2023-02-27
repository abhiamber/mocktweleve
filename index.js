const express = require("express");
const app = express();
require("dotenv").config();
let conncet = require("./config/db");
let PORT = process.env.PORT;
let cors = require("cors");
app.use(express.json());
let cors = require("cors");
app.use(cors());

app.get("/", async (req, res) => {
  res.send("hurray............");
});

app.listen(PORT, async () => {
  await conncet();
  console.log("server is working");
});
