const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const { log } = require("./utils/logger");
const { swaggerSpec } = require("./swagger-docs");
const swaggerUi = require("swagger-ui-express");
const { stockRouter } = require("./routes/stock-routes");

dotenv.config();
const app = express();
let { PORT, PROTOCOL } = process.env;
if (!PORT) {
    log(
        "app:stock-service:app.js",
        "FATAL ERROR : Port is not defind! Please check .env setting"
    );
    process.exit(1);
}
if (!PROTOCOL) {
    log(
        "app:stock-service:app.js",
        "FATAL ERROR : PROTOCOL is not defind! Please check .env setting"
    );
    process.exit(1);
}

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/stock-service", stockRouter);
app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

process.on("uncaughtException", (ex) => {
    log("Error uncaughtException! Please check the fields attributes", ex);
    process.exit(1);
});
process.on("unhandledRejection", (ex) => {
    log("Error unhandledRejection! Please check the fields attributes", ex);
    process.exit(1);
});

switch (PROTOCOL) {
    case "http": {
        const httpServer = http.createServer(app);
        httpServer.listen(parseInt(`${PORT}`), undefined, undefined, () => {
            log(
                "app:stock-service:API_server",
                `HTTP listening on port ${PORT}`
            );
        });
        break;
    }
    default: {
        log(
            "app:stock-service(switch-case):app.js",
            "FATAL ERROR : PROTOCOL is not defind! Please check .env setting"
        );
        process.exit(1);
    }
}
