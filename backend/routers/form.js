//router to add user data

const router = require("express").Router();
const UserData = require("../models/schema");

router.post("/", (req, res) => {
  console.log(req.body);
  try {
    const userdata = new UserData({
      name: req.body.name,
      phonenumber: req.body.number,
      email: req.body.email,
      hobbies: req.body.hobbies,
    });
    const response = userdata.save();
    return res.json({
      result: "success",
    });
  } catch (error) {
    return res.json({ err: "error occured" });
  }
});

module.exports = router;
