const userModel = require("../models/user.js");

//create user data
exports.createUserData = (req, res) => {
    const {name, email, country} = req.body;

    if(!name || !email || !country) {
        res.status(400).json({message: "please fill all fields"})
    }

    else {
        const saveUserData = new userModel ({
            name,
            email,
            country
        })
    
        saveUserData.save()
        .then(() => res.status(200).json({message: "user added"}))
        .catch((err) => res.status(500).json({Err: err}))
    }    
}

//get data from the database
exports.getUserData = (_, res) => { 

    userModel.find()
    .then((response) => {
        res.status(200).json(response);
    })
    .catch((err) => res.status(500).json({Err: err}));
}

//update the users data
exports.updateUserData = (req, res) => {
    const {id, name, email, country} = req.body;

    if(!id || !name || !email || !country) {
        res.status(400).json({message: "please fil all fields"})
    }

    else{ 

        const updateUserData = new userModel({
            _id: id,
            name,
            email,
            country
        })
    
        userModel.updateOne({_id : id}, updateUserData)
        .then(() => {
            res.status(200).json({message: "data updated successfullu"})
        })
        .catch((err) => {
            res.status(500).json({Error: err});
        });
    }
}

//delete a user data
exports.deleteUserData = (req, res) => {
    const {id} = req.body;

    if(!id) {
        res.status(400).json({message: "please provide id"})
    }

    else {
        userModel.deleteOne({_id : id})
        .then(() => {
            res.status(200).json({message: "user deleted successfully"})
        })
        .catch((err) => {
            res.status(500).json({Error: err})
        })
    }
}

