//router to update user data
//i updated data one by one if any of the field is not NULL then it is going to be updated

const router = require("express").Router();
const UserData = require("../models/schema");

router.post('/', (req, res) => {
    console.log(req.body);
    try {
        var query = { _id: req.body.id }

        if (req.body.name != "") {
            updateData = UserData.updateOne(query, { $set: { name: req.body.name } }, function (err, res) {
                if (err) throw err;
                console.log("Name updated");
            })
        }
        if (req.body.email != "") {
            updateData = UserData.updateOne(query, { $set: { email: req.body.email } }, function (err, res) {
                if (err) throw err;
                console.log("Email updated");
            })
        }
        if (req.body.number != "") {
            updateData = UserData.updateOne(query, { $set: { phonenumber: req.body.number } }, function (err, res) {
                if (err) throw err;
                console.log("Number updated");
            })
        }
        if (req.body.hobbies != "") {
            updateData = UserData.updateOne(query, { $set: { hobbies: req.body.hobbies } }, function (err, res) {
                if (err) throw err;
                console.log("Hobbies updated");
            })
        }

        return res.json({
            result: "Updated"
        })
    } catch (error) {
        return res.json({ err: "error occured" });
    }

})



module.exports = router;