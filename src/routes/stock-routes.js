/**
 * @namespace
 * @module Routes
 * @description Route details for P2P API serive.
 * */
const express = require("express");
const {
    body_validator,
    params_validator,
    query_validator,
} = require("../middleware/validator");
const input_check = require("../schemas/input-check");
const SockService = require("../services/sock-service");
const { success, fail } = require("../utils/response-helpers");

const stockRouter = express.Router();
const sockService = new SockService();

/**
 * @swagger
 *
 * /:
 *   get:
 *     description: To check health of the application
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: I working a_ok.
 */

stockRouter.get("/", (req, res) => {
    res.end("Sock-Exchange API service is up & running");
});

/**
 * @swagger
 *
 * /stock/{min}:
 *   get:
 *     description: Get stock ticker details.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: min
 *         description: stock time min.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: success
 */

stockRouter.get(
    "/stock/:min",
    params_validator(input_check),
    async (req, res) => {
        try {
            res.json(
                success(
                    "fetched",
                    await sockService.stockTickerPrices(req.params.min)
                )
            );
        } catch (ex) {
            res.json(fail("failed", ex));
        }
    }
);

module.exports = { stockRouter };
