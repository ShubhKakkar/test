const express = require('express');
const serverConfig = require('./configs/server.config');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Dummy Data
const db = require('./models');
const User = db.user;
const Post = db.post;
const Role = db.role;
db.sequelize.sync({force: true}).then(()=>{
    console.log("Tables dropped and recreated");
    init();
});

function init() {
    User.bulkCreate([
        {
            username: "Shubham Kakkar",
            email: "webkoala1998@gmail.com",
            password: "WebKoala0841"
        },{
            username: "Charul Kakkar",
            email: "charulkakkar2003@gmail.com",
            password: "CharulKakkar2003"
        }
    ]);

    Post.bulkCreate([
        {
            title:"My first post",
            description:"Lorem ipsum dolor sit amet.",
            categories: ["beauty","nature"],
            userId:1
        },{
            title:"My second post",
            description:"Lorem ipsum dolor sit amet.",
            categories: ["nature","science"],
            userId:2
        },{
            title:"My third post",
            description:"Lorem ipsum dolor sit amet.",
            categories: ["home","fitness"],
            userId:1
        }
    ]);

    Role.bulkCreate([{
        name: 'admin'
    },{
        name: 'user'
    }])
}

// Auth routes
require('./routes/auth.route')(app);

// Home routes
app.get('/', (req, res) => {
    res.send('Welcome');
});

// User routes
require('./routes/user.route')(app);

// Post routes
require('./routes/post.route')(app);

const PORT = serverConfig.PORT;
app.listen(PORT,()=>{
    console.log('listening at port' + PORT);
});