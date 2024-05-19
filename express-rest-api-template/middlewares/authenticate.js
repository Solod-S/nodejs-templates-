const authenticate = async (req, res, next) => {
  try {
    next();
  } catch {
    next(HttpError(401));
  }
};

module.exports = authenticate;
