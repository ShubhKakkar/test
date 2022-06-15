module.exports = (sequelize,Sequelize) => {
    const Post = sequelize.define('post',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        description:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Post;
}