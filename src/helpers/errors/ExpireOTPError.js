const BaseError = require("./BaseError");

class ExpireOTPError extends BaseError {
  constructor(error = { msg: "OTP Expired" }) {
    super(error.msg);
    this.statusCode = 400;
    this.errors = [error];
  }
}

module.exports = ExpireOTPError;
