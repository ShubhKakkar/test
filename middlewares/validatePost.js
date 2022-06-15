module.exports = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
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
    if(description.length<200){
        res.status(400).json({
            message: 'Description cannot be more than 200 letters in length'
        });
        return;
    }
    next();
};
