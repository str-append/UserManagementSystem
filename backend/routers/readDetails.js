//router to get all user data

const router = require("express").Router();
const UserData = require("../models/schema");

router.get("/", async (req, res) => {
  try {
    const user = await UserData.find();
    return res.json({
      user,
    });
  } catch (err) {
    return res.json({ error: "Something went wrong " });
  }
});

module.exports = router;
