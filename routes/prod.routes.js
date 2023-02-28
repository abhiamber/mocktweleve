let express = require("express");

let app = express.Router();
let ProdeModel = require("../model/prod.model");

// **************create prod*********

app.post("/", async (req, res) => {
  let { Description, Name, Category, Image, Location, Date, Price } = req.body;

  try {
    let prod = new ProdeModel({
      Description,
      Name,
      Category,
      Image,
      Location,
      Date,
      Price,
    });
    await prod.save();
    return res.send({ messg: "new prod created" });
  } catch (e) {
    console.log(e.message);
    res.send({ meesg: e.message });
  }
});

// ***********get alll prod  max qnty 4 ***********

app.get("/", async (req, res) => {
  let { page = 1, Category, Date, search } = req.query;
  let prod;
  try {
    if (search) {
      prod = await ProdeModel.find({ Name: search })

        .skip((page - 1) * 4)
        .limit(4);
    } else if (Category && Date) {
      prod = await ProdeModel.find({ Category })

        .skip((page - 1) * 4)
        .limit(4)
        .sort({ Date });
    } else if (Category) {
      prod = await ProdeModel.find({ Category })
        .skip((page - 1) * 4)
        .limit(4);
    } else if (Date) {
      prod = await ProdeModel.find()

        .skip((page - 1) * 4)
        .limit(4)
        .sort({ Date });
    } else {
      prod = await ProdeModel.find()
        .skip((page - 1) * 4)
        .limit(4);
    }

    res.send({ messg: prod });
  } catch (e) {
    cosole.log(e.message);
    res.send({ messg: e.message });
  }
});

// ***********deleted buy prod***********

app.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await ProdeModel.findByIdAndDelete(id);
    res.send({ messg: "prod deleetd" });
  } catch (e) {
    cosole.log(e.message);
    res.send({ messg: e.message });
  }
});

module.exports = app;
