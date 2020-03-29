const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { log, ExpressAPILogMiddleware } = require("@rama41222/node-logger");

const config = {
  name: "sample-express-app",
  port: 3000,
  host: "0.0.0.0"
};

const app = express();
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors());
app.use(ExpressAPILogMiddleware(logger, { request: true }));

app.get("/", (req, res) => {
  const response = { value: 0, action: "modify server.js and save!" };

  res.setHeader("Content-Type", "application/json");

  res.status(200).json(response);
});

app.listen(config.port, config.host, e => {
  if (e) {
    throw new Error("Internal Server Error");
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
