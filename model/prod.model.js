let { Schema, model } = require("mongoose");

let prodSchema = new Schema(
  {
    Description: String,
    Name: String,
    Category: String,
    Image: String,
    Location: String,
    Date: Date,
    Price: Number,
  },
  { versionKey: false }
);

const ProdeModel = model("prod", prodSchema);

module.exports = ProdeModel;
