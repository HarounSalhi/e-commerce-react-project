const Categorie = require('../models/categorie');

exports.createCategorie = (req,res ,next) => {
    const categorie=new Categorie({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    });

    categorie.save().then(
        () => {
            res.status(201).json({
                message: 'Categorie saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error : error
            });
        }
    );
};

exports.modifyCategorie = (req, res, next) => {
    const categorie = new Categorie({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        imageUrl:req.body.imageUrl
    });
    Categorie.updateOne({_id: req.params.id}, categorie).then(
        () => {
            res.status(201).json({
                message: 'Categorie updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error :error
            });
        }
    );
};

exports.deleteCategorie = (req,res,next)=> {
    Categorie.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAllCategorie = (req,res,next) => {
    Categorie.find().then(
        (Categorie) => {
            res.status(200).json(Categorie);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};