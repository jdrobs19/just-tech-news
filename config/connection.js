const { SSL_OP_NO_QUERY_MTU } = require("constants");
const { Sequelize } = require("sequelize/types");

let sequelize;

if(process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else{
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}


// const Sequelize = require('sequelize');
// require('dotenv').config()

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
// });

// module.exports = sequelize;