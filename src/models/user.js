const mongoose = require("mongoose");

const user = mongoose.Schema;

const userData = new user ({
    name: {type: String, required: true},
    email: {type: String, required: true},
    country: {type: String, required: true}
},
{
    timestamps: true
});

const userDataModel = mongoose.model("data", userData);

module.exports = userDataModel;