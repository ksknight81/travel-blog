const {Model, DataTypes} = require('sequelize');

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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

<<<<<<< HEAD:models/Post.js
module.exports = Post;
=======
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
})

module.exports = Review;
>>>>>>> feature/comments:models/Review.js