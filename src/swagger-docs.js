const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        // openapi: "3.0.0", // Specification (optional, defaults to swagger: '2.0')
        info: {
            title: " Stock Exchange Service", // Title (required)
            version: "1.0.0", // Version (required)
            description: " Stock Exchange API Serves Interface",
        },
        basePath: "/stock-service", // Base path (optional)
        schemes: ["http", "https"],
    },
    // Path to the API docs
    apis: ["./src/routes/*.js"],
};

// Initialize swagger-jsdoc ->  validated swagger spec in json format
const swaggerSpec = swaggerJsdoc(options);

module.exports = {
    swaggerSpec,
};
