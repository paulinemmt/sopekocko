const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


exports.signUpUser = (req, res, next) => {
    //cryptage du mot de passe
    bcrypt.hash(req.body.password, 10)
        //creation user et enregistre dans DB
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
                //   hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


exports.loginUser = (req, res, next) => {
    //chercher l'adresse mail dans la base de donnée
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            console.log('ok')
            //     //vérifier le mot de passe crypté
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    //         //si c'est bon, création d'un token d'identification
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            //             //creation d'un token
                            'RANDOM_TOKEN_SECRET',
                            //valable 24h
                            { expiresIn: '24h' }
                        )
                    });
                })
                //       // erreur serveur
                .catch(error => res.status(500).json({ error }));
        })
        // erreur serveur

        .catch(error => res.status(500).json({ error }));
};