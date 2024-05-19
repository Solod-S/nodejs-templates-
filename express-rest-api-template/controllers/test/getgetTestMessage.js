const getgetTestMessage = async (req, res, next) => {
  res.json({
    status: "success",
    message: "Successfully get test message",
    data: {
      message: "Hello world",
    },
  });
};

module.exports = getgetTestMessage;
