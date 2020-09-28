const express = require('express');
const sauceRouter = express.Router(); //appel méthode router de express

const sauceCtrl = require('../controllers/sauce');

//routes
sauceRouter.post('/', sauceCtrl.analyseSauce);
sauceRouter.put('/:id', sauceCtrl.modifySauce);
sauceRouter.get('/', sauceCtrl.getAllSauce);
sauceRouter.get('/:id', sauceCtrl.getOneSauce);
sauceRouter.delete('/:id', sauceCtrl.deleteSauce);
// sauceRouter.post('/:id/like', sauceCtrl.userLikeStatusSauce);

///////////// CREATION DES ROUTES //////////////


  module.exports = sauceRouter;