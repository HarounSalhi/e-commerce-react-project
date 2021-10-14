const product = require('../models/product');
const Product = require('../models/product');

exports.createPrdoduct = (req, res, next) => {
    const product= new Product({
        title: req.body.title,
        description:req.body.descrition,
        imageUrl:req.body.imageUrl,
        price:req.body.price,
        categorie:req.body.categorie,
        color:req.body.color,
        size:req.body.size
    });

    Product.save().then(
        () => {
            res.status(200).json({
                message:'product added successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.getOneProduct = (req, res, next) => {
    Product.findOne({_id: req.params.id}).then(
        (product)=>{
            req.status(200).json(product);
        }
    ).catch(
        (error) =>{
            res.status(404).json({
                error:error
            });
        }
    );
};

exports.modifyProduct =(req, res, next) => {
    const product=new Product({
        title: req.body.title,
        description:req.body.descrition,
        imageUrl:req.body.imageUrl,
        price:req.body.price,
        categorie:req.body.categorie,
        color:req.body.color,
        size:req.body.size
    })

    Product.updateOne({_id:req.body.id},product).then(
        ()=>{
            res.status(201).json({
                message:'product updated successfully!'
            });
        }
    ).catch(
        (error)=>{
            res.status(400).json({
                error:error
            });
        }
    );
};

exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({_id:req.params.id}).then(
        ()=>{
            res.status(200).json({
                message:'product deleted!0;'
            });
        }
    ).catch(
        (error)=>{
            res.status(400).json({
                error:error
            });
        }
    );
};

exports.getAllProduct = (req, res, next) =>{
    Product.find().then(
        (product) => {
            res.status(200).json(product)
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error:error
            });
        }
    );
}; 