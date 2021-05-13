const userModel = require("../models/user.js");

//create user data
exports.createUserData = (req, res) => {
    const {name, email, country} = req.body;

    if(!name || !email || !country) {
        res.status(400).json({message: "please provide all fields"})
    }

    else {
        const saveUserData = new userModel ({
                    name,
                    email,
                    country
                })

             saveUserData.save()
             .then(() => {
                 res.status(200).json({
                     message: "user added successfully",
                     data: {
                         name,
                         email,
                         country
                     }})
                    }).catch((err) => res.status(500).json({Err: err}));
    }
}
    
//get all datas from the database
exports.getUserData = (_, res) => { 

    userModel.find()
    .then((response) => {

        res.status(200).json(response);

    }).catch((err) => res.status(500).json({Err: err}));
}

//get specific user data
exports.getSingleUser = (req, res) => {

    const {_id} =  req.body

    userModel.find({_id})
    .then((response) => {

        res.status(200).json({  data: response })
        
    }).catch((err) => res.status(500).json({Err: err}));
}


//update the users data
exports.updateUserData = (req, res) => {
    const {_id, name, email, country} = req.body;

    if(!_id || !name || !email || !country) {
        res.status(400).json({message: "please fil all fields"})
    }

    else{ 

        const updateUserData = new userModel({
            _id,
            name,
            email,
            country
        })
    
        userModel.updateOne({_id}, updateUserData)
        .then(() => {
            res.status(200).json({
                message: "data updated successfullu",
                data: {
                    _id,
                    name,
                    email,
                    country
                }
            })
        })
        .catch((err) => res.status(500).json({Error: err}));
    }
}

//delete a user data
exports.deleteUserData = (req, res) => {
    const {_id} = req.body;

    if(!_id) {
        res.status(400).json({message: "please provide id"})
    }

    else {
        userModel.deleteOne({_id})
        .then(() => {
            res.status(200).json({message: "user deleted successfully"})
        })
        .catch((err) => {
            res.status(500).json({Error: err})
        })
    }
}

exports.defaultLink = (_, res) => {
    res.json("zuri crud application")
}

