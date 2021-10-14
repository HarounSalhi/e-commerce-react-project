const Order = require('../models/order');

exports.createOrder = (req, res, next) => {
    const order = new Order({
        userId: req.body.userId,
        product: req.body.product,
        price: req.body.price,
        date: req.body.date
    });

    order.save().then(
        () => {
            res.status(201).json({
                message: 'Order saved successfully !'
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

exports.getOneOrder = (req,res, next) => {
    Order.findOne({
        _id:req.params.id
    }).then(
        (order) => {
            res.status(200).json(order);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.deleteOrder = (req, res, next) => {
    Order.deleteOne({_id:req.params.id}).then(
        () => {
            res.status(200).json({
                message:'Deleted!'
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

exports.getAllStuff =(req, res, next) => {
    Order.find().then(
        (order)=>{
            res.status(200).json(order);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error:error
            });
        }       
    );
};