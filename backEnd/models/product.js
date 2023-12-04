const { DataTypes } = require('sequelize');
const db = require('../models/index')

module.exports = (sequelize, DataTypes) => {


    const Product = sequelize.define('Product', {
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categories: {
            type: DataTypes.ENUM('women', 'men', 'kids'),
            allowNull: false,
        },
       
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: true, // Adjust as needed
          },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        
        published: {
            type: DataTypes.BOOLEAN
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    }, {
        freezeTableName: true,
    });


    // Product.associate = (models) => {
    //     Product.belongsTo(models.User, { foreignKey: 'user_Id', as: 'user' });
    Product.associate = (models) => {
        Product.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'users',
        });
        Product.hasMany(models.Review, {
          foreignKey: 'product_id',
          as: 'reviews',
        });

      };
    return Product;
};