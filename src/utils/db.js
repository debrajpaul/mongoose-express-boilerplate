const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { log } = require("./logger");

dotenv.config();
let {
    MONGO_HOST,
    MONGO_PORT,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_DB,
} = process.env;
if (!MONGO_HOST) {
    log(
        "app:DB:db.js",
        "FATAL ERROR : MONGO_HOST is not defind! Please check .env setting"
    );
    process.exit(1);
}
if (!MONGO_PORT) {
    log(
        "app:DB:db.js",
        "FATAL ERROR : MONGO_PORT is not defind! Please check .env setting"
    );
    process.exit(1);
}
if (!MONGO_DB) {
    log(
        "app:DB:db.js",
        "FATAL ERROR : MONGO_DB is not defind! Please check .env settings"
    );
    process.exit(1);
}

let client;
const connectDB = function () {
    let connection_string = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
    mongoose
        .createConnection(connection_string, {
            poolSize: 50,
            connectTimeoutMS: 30000,
            auto_reconnect: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user: MONGO_USERNAME ? MONGO_USERNAME : "",
            pass: MONGO_PASSWORD ? MONGO_PASSWORD : "",
        })
        .then((clientInit) => {
            log("app:DB:db.js", "STATUS : Mongo connection Established");
            client = clientInit;
        })
        .catch((err) => {
            log(
                "app:DB:db.js",
                "FATAL ERROR : Mongo connection failed! Please check .env setting",
                err
            );
        });
};

const getConn = () => client;

const closeConn = () => client.close();

module.exports = { connectDB, getConn, closeConn };
