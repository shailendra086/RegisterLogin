const express = require('express');
const router = express.Router();
const {signup,login}= require('../controllers/Auth');
const { getAllUser } = require('../controllers/getUser');


router.post("/login",login);
router.post("/register",signup);
router.get("/getUser",getAllUser);



module.exports = router;