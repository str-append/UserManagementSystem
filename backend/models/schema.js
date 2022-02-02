//MongoDB Schema

const { Timestamp } = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    phonenumber: { type: String, required: true },
    email: { type: String, required: true },
    hobbies: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.model('UserData', UserSchema);