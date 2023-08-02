const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
    userID: {type: String, required: true},
    balance: {type: Number, required: true}
});

module.exports = mongoose.model("Economy", testSchema);