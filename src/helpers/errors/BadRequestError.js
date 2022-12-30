const BaseError = require("./BaseError");

class BadRequestError extends BaseError {
  constructor(error) {
    super(error.msg);
    this.statusCode = 400;
    this.errors = [error];
  }
}

module.exports = BadRequestError;


