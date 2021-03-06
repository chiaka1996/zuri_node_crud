const router = require("express").Router();

const addUserData = require('./controllers/user')

router.post('/adduser', addUserData.createUserData);

router.get('/getuser', addUserData.getUserData);

router.put('/updateuser', addUserData.updateUserData);

router.delete('/deleteuser', addUserData.deleteUserData);

router.get('/singleuser', addUserData.getSingleUser);

router.get("/", addUserData.defaultLink);


module.exports = router;