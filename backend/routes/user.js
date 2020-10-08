const express = require('express');
const userRouter = express.Router(); //appel méthode router de express

// const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');


//routes
//chemin, middleware de protection et logique métier à utiliser
userRouter.post('/signup',  userCtrl.signUpUser);
userRouter.post('/login', userCtrl.loginUser);

module.exports = userRouter;