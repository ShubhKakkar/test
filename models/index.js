// Creating new connection with database
const Sequelize = require('sequelize');
const dbConfig = require('../configs/db.config');
const User = require('./user.model');
const Post = require('./post.model');
const Role = require('./role.model');
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
});

// Verifying the connection
try {
    sequelize.authenticate().then(()=>{
        console.log('Connection has been established successfully.');
    });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Exporting db
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = User(sequelize,Sequelize);
db.post = Post(sequelize,Sequelize);
db.role = Role(sequelize,Sequelize);
db.ROLE = ["user","admin"]

// Relation between user and role tables -> Many to Many
db.user.belongsToMany(db.role,{
    through: "user_roles",
    foreignKey: "userId"
});
// Relation between role and user tables -> Many to Many
db.role.belongsToMany(db.user,{
    through: "user_roles",
    foreignKey: "roleId"
});

// Relation between user and post tables -> One user can have multiple Posts
db.user.hasMany(db.post);
// db.post.belongsToMany(db.user);

module.exports = db;