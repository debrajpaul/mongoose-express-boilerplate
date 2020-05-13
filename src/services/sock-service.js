const axios = require("axios");
const numeral = require("numeral");
const dotenv = require("dotenv");
const log = require("../utils/logger");

dotenv.config();
let { BASE_URL, API_KEY, FUNCTION_TYPE, SYMBOL_TYPE } = process.env;
if (!BASE_URL) {
    log(
        "app:stock-service:app.js",
        "FATAL ERROR : BASE_URL is not defind! Please check .env setting"
    );
    process.exit(1);
}
if (!API_KEY) {
    log(
        "app:stock-service:app.js",
        "FATAL ERROR : API_KEY is not defind! Please check .env setting"
    );
    process.exit(1);
}
if (!FUNCTION_TYPE) {
    log(
        "app:stock-service:app.js",
        "FATAL ERROR : FUNCTION_TYPE is not defind! Please check .env setting"
    );
    process.exit(1);
}
if (!SYMBOL_TYPE) {
    log(
        "app:stock-service:app.js",
        "FATAL ERROR : SYMBOL_TYPE is not defind! Please check .env setting"
    );
    process.exit(1);
}

/**
 * @class
 * @name SockService
 * @description The User provider class.
 */

module.exports = class SockService {
    //  constructor
    constructor() {}

    /**
     * @function
     * @instance
     * @memberof SockService
     * @name getMemoryUsage
     * @param { String } username end_user usermane
     * @returns success Object or error object.
     * @description validate username exit or what.
     */
    getMemoryUsageDetails = async () => {
        try {
            const result = await new Promise((resolve, reject) => {
                setInterval(async () => {
                    log(
                        "app:borrower:digiSignSignaturePageAPICall",
                        "wait for 5 sec"
                    );
                    const { rss, heapTotal } = process.memoryUsage();
                    log(
                        "app:borrower:digiSignSignaturePageAPICall",
                        `ress--> ${numeral(rss).format(
                            "0.0 ib"
                        )} heapTotal--> ${numeral(heapTotal).format("0.0 ib")}`
                    );
                    resolve(
                        `ress--> ${numeral(rss).format(
                            "0.0 ib"
                        )} heapTotal--> ${numeral(heapTotal).format("0.0 ib")}`
                    );
                }, 50000);
            });
            return { result };
        } catch (ex) {
            log("app:users:getMemoryUsageDetails", ex);
        }
    };

    /**
     * @function
     * @instance
     * @memberof SockService
     * @name createLoyalty
     * @param { Object } body end_user signup json body
     * @returns success Object or error object.
     * @description user signup function
     */
    stockTickerPrices = async (min) => {
        try {
            // pushing to the loyalty db
            const result = await axios.get(
                `${BASE_URL}/query?function=${FUNCTION_TYPE}&symbol=${SYMBOL_TYPE}&interval=${min}min&apikey=${API_KEY}`
            );
            // console.log(result.data);
            // need to change the JSON structure late
            return {
                result: result.data,
            };
        } catch (ex) {
            throw { result: ex };
        }
    };
};
