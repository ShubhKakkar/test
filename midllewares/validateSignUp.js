module.exports = (req,res,next) => {
    console.log(req.body);
    if(!req.body.username){
        res.send("Username cannot be empty");
        return;
    }
    else if(!req.body.password){
        res.send("Password cannot be empty");
        return;
    }
    else if(!req.body.email){
        res.send("Email cannot be empty");
        return;
    }
    next();
}