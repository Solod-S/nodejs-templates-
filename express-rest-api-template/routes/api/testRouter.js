const testRouter = require("express").Router();

const { test } = require("../../controllers");
const { authenticate } = require("../../middlewares");

//  get test message
testRouter.get("/", authenticate, test.getgetTestMessage);

module.exports = testRouter;
