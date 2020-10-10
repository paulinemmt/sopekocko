//////////////////////////////APPLICATION/////////////////////////////////

const express = require('express'); //ajout du framework express au projet
const bodyParser = require('body-parser'); //ajout de body-parser au projet : permet extraction d'objet JSON
const mongoose = require('mongoose'); //ajout de mongoose au projet : gestion de la DB

const app = express();
const path = require('path');

//importation des fichiers routes
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

//connexion à la DB
mongoose.connect('mongodb+srv://sopekockoPM:mongoDBsopekocko@cluster0.7fgjw.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

//correction des erreurs de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//middleware global :JSON
app.use(bodyParser.json());

//routes
app.use('/images', express.static(path.join(__dirname, 'images'))); //express doit gérer la ressource image de manière statique
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);


module.exports = app;