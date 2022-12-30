const BaseError = require("./BaseError");

class InvalidCodeError extends BaseError {
  constructor(error = { msg: "Invalid verification code" }) {
    super(error.msg);
    this.statusCode = 400;
    this.errors = [error];
  }
}

module.exports = InvalidCodeError;
