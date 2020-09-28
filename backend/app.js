const express = require('express'); //ajout de express au projet
const bodyParser = require('body-parser'); //ajout de body-parser au projet : permet extraction d'objet JSON
const mongoose = require('mongoose'); //ajout de mongoose au projet : gestion de la DB
const Sauce = require('./models/sauce'); //schéma de sauce
const User = require('./models/user'); //schéma d'utilisateur

const app = express();

//Appel des fichiers routes
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');
// Connexion à la DB
mongoose.connect('mongodb+srv://sopekockoPM:mongoDBsopekocko@cluster0.7fgjw.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//correction des erreurs de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });

app.use(bodyParser.json());

//route à prendre
app.use('/api/sauce', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;