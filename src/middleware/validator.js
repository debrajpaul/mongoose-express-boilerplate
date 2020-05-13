const Ajv = require("ajv");
const { fail } = require("../utils/response-helpers");

const body_validator = (schema) => {
    return function (req, res, next) {
        let { body } = req;
        let ajv = new Ajv();
        let valid = ajv.validate(schema, body);
        if (!valid) {
            let error = ajv.errorsText();
            res.status(400).json(fail("Request validation failed", { error }));
            return;
        }
        next();
    };
};

const params_validator = (schema) => {
    return function (req, res, next) {
        let { params } = req;
        let ajv = new Ajv();
        let valid = ajv.validate(schema, params);
        if (!valid) {
            let error = ajv.errorsText();
            res.status(400).json(fail("Request validation failed", { error }));
            return;
        }
        next();
    };
};

const query_validator = (schema) => {
    return function (req, res, next) {
        let { query } = req;
        let ajv = new Ajv();
        let valid = ajv.validate(schema, query);
        if (!valid) {
            let error = ajv.errorsText();
            res.status(400).json(fail("Request validation failed", { error }));
            return;
        }
        next();
    };
};

module.exports = {
    body_validator,
    params_validator,
    query_validator,
};
