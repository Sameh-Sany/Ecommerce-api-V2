const BaseError = require("./BaseError");

class verificationError extends BaseError {
  constructor(error = { msg: "Driver not verify" }) {
    super(error.msg);
    this.statusCode = 422;
    this.errors = [error];
  }
}

module.exports = verificationError;
