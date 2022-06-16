const db = require("../../models");
const User = db.user;
module.exports = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const userId = req.body.userId;
    if(!title){
        res.status(400).json({
            message: 'Title cannot be blank'
        });
        return;
    }
    if(!description){
        res.status(400).json({
            message: 'Description cannot be blank'
        });
        return;
    }
    if(description.length>200){
        res.status(400).json({
            message: 'Description cannot be more than 200 letters in length'
        });
        return;
    }
    User.findOne({
        where:{
            id:userId
        }
    }).then((user)=>{
        if(!user){
            res.status(400).json({
                message:`No such user with userId ${userId} exits`
            });
            return;
        }
    }).catch((err)=>{
        res.status(500).json({
            message:err.message
        });
    });
    next();
};
