"use strict";

const Message = require("./../models/messages");

exports.all = (req, res, next) => {
            Message.find()
            .then( messages => {
                res.json(messages);
            })
            .catch( err => {
                next(new Error(err));
            });
};
exports.post = (req, res, next) => {
    let body = req.body;
    const message = new Message(body);

    message.save()
        .then( newmessage => {
            res.json(newmessage);
        })
        .catch( err => {
            next(new Error(err));
        });
};
