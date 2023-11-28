module.exports ={
    HOST: 'localhost',
    USER: 'root',
    PASSWORD:'root', 
    DATABASE: 'dripland',
    DIALECT: 'mysql',
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
}

//connceting to our data base configuration we gonna pass it to sequelize