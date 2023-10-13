const {Sequelize}= require("sequelize");
const env = require("./env");

let db;

module.exports.connect = function () {

    try {
        if(!db){
            db = new Sequelize({
                host: env.DB_HOST,
                port: env.DB_PORT,
                username: env.DB_USER,
                password: env.DB_PASSWORD,
                database: env.DB_NAME,
                dialect: 'postgres',
            });
        }
        return db;
    } catch(error) {
        console.log(error);
    }

}