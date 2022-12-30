const BaseError = require("./BaseError");

class RouteNotFoundError extends BaseError {
  constructor(error) {
    super(error);
    this.statusCode = 404;
    this.errors = [
      {
        msg: error,
      },
    ];
  }
}

module.exports = RouteNotFoundError;
