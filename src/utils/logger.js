const debug = require("debug");

const log = (scope, ...args) => {
    debug(scope)(args);
};

module.exports = {
    log,
};
