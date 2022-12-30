const BaseError = require("./BaseError");

class InvalidCredentialError extends BaseError {
  constructor(error = { msg: "Invalid Credential" }) {
    super(error.msg);
    this.statusCode = 400;
    this.errors = [error];
  }
}

module.exports = InvalidCredentialError;


