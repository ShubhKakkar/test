const jwt = require("jsonwebtoken");
const authConfig = require("../../configs/auth.config");
const db = require("../../models");
const User = db.user;

const verifyToken = (req,res,next) => {
    const token = req.headers["x-access-token"];
    if(!token) {
        res.status(403).json({
            message: "Access token is required"
        }) 
    }
    jwt.verify(token,authConfig.secret_key , (err,decoded)=>{
        if(err){
            res.status(401).json({
                message: "Unauthorized"
            });
        }
        req.userId = decoded.id;
        next();
    })
    next();
}

const isAdmin = (req, res, next) => {
    User.findOne({
        where:{
            id:req.userId
        }
    }).then((user)=>{
        user.getRoles().then((roles)=>{
            for(let i=0;i<roles.length;i++){
                if(roles[i].name === "admin"){
                    next();
                    return;
                }
            }
            res.status(500).json({
                message:"Admin role required"
            });
            return;
        });
    });
}

module.exports = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
}