const morgan = require("morgan");

morgan.token("body", (req) => JSON.stringify(req.body));
morgan.token("currentUserEmail", (req) => req.currentUser?.email || "anonymous");

const logger = morgan(":method :url :status :res[content-length] - :response-time ms :body (:currentUserEmail)");

const attachCurrentUser = (req, res, next) => {
  const email = req.header("X-USER-EMAIL");
  if (email) req.currentUser = { email };
  next();
};

module.exports = { logger, attachCurrentUser };
