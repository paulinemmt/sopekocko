const express = require('express');
const userRouter = express.Router(); //appel méthode router de express

const userCtrl = require('../controllers/user');

//routes
userRouter.post('/', userCtrl.signUpUser);
userRouter.post('/', userCtrl.loginUser);

module.exports = userRouter;