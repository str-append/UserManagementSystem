//router to delete user.... Endpoint to delete api

const router = require("express").Router();
const UserData = require("../models/schema");

router.post("/", async (req, res) => {
    console.log(req.body);
    try {
        await UserData.deleteOne({
            _id: req.body.id,
        }); //deletes data
        return res.json({
            result: "Deleted",
        });
    } catch (error) {
        return res.json({
            err: "error occured",
        });
    }
});

module.exports = router;
