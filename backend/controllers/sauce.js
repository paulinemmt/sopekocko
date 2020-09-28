const Sauce = require('../models/sauce');

exports.analyseSauce = (req, res, next) => {
      
    //       });
    //       thing.save()
    //         .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    //         .catch(error => res.status(400).json({ error }));
        };

    exports.modifySauce = (req, res, next) => {
              //met à jour la sauce avec l'id de l'utilisateur
            Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
              .then(() => res.status(200).json({ message: 'Objet modifié !'}))
              .catch(error => res.status(400).json({ error }));
             };
  
exports.getAllSauce = (req, res, next) => {
      //Tableau de donnée de sauces
    Sauce.find()
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({ error }));
   };

exports.getOneSauce = (req, res, next) => {
    //       //Renvoit la sauce avec l'id correspondant
        Sauce.findOne({ _id: req.params.id })
          .then(sauce => res.status(200).json(sauce))
          .catch(error => res.status(404).json({ error }));
};
  
exports.deleteSauce = (req, res, next) => {
          //supprime la sauce
        Sauce.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      };

// exports.userLikeStatusSauce = (req, res, next) => {
//     //supprime la sauce
  
// };