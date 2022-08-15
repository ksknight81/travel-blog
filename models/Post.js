const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// create post model
class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    travel_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true
        }
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            max: 5,
            min: 0
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        }
    },
    blog: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
        // pass in imported sequelize connection
        sequelize,
        // don't automatically create createdAt updatedAt fields
        timestamps: false,
        // dont plurize name of tables
        freezeTableName: true,
        // use undersscore instead of camelCase
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'post'
    }
);


module.exports = Post;
