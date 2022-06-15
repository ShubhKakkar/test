module.exports = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    if(!username){
        res.status(400).json({
            message: 'Username cannot be blank'
        });
        return;
    }
    if(!password){
        res.status(400).json({
            message: 'Password cannot be blank'
        });
        return;
    }
    if(!email){
        res.status(400).json({
            message: 'Email cannot be blank'
        });
        return;
    }
    next();
};
