
// data base conncetion and mysql tables in our folder
const dbConfig = require('../config/db-config');
const { Sequelize, DataTypes } = require('sequelize')


const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,

    dialect: dbConfig.DIALECT,
    pool: {
        min: dbConfig.pool.min,
        max: dbConfig.pool.max,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }


});


sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Errr'+ err)
})


//db model
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.models = {};
db.models.users = require('./user')(sequelize, Sequelize.DataTypes);
db.models.products= require('./product')(sequelize, Sequelize.DataTypes);
db.models.reviews= require('./review')(sequelize, Sequelize.DataTypes);

/* The code `db.sequelize.sync({ force: false })` is used to synchronize the defined models with the
database. It creates the necessary tables in the database based on the defined models. */

db.products = require('./product.js')(sequelize, DataTypes)
db.reviews = require('./review.js')(sequelize, DataTypes)

db.products.hasMany(db.reviews, {
    foreignKey: 'product_id',
    as: 'reviews'
})

db.reviews.belongsTo(db.products, {
    foreignKey: 'product_id',
    as: 'product'
})


db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})




module.exports = db;





