const ctrlWrapper = require("../../middlewares/ctrlWrapper");
const getgetTestMessage = require("./getgetTestMessage");

module.exports = {
  getgetTestMessage: ctrlWrapper(getgetTestMessage),
};
