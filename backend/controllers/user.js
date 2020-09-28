const User = require('../models/user');

exports.signUpUser = (req, res, next) => {
    const user = new User({
      ...req.body
    });
    user.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

    
exports.loginUser = (req, res, next) => {
      //vérifie information id user
      console.log('coucou');
      //renvoit
      
    //   user.save()
    //     .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    //     .catch(error => res.status(400).json({ error }));
    };