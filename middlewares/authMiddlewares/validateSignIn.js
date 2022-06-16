module.exports = (req,res,next) => {
    if(!req.body.email){
        res.send("Email cannot be blank");
        return;
    }
    if(!req.body.password){
        res.send("Password cannot be blank");
        return;
    }
    next();
}