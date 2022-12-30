const BaseError = require("./BaseError");

class InternalError extends BaseError {
  constructor(trace) {
    console.log(trace);
    const error = { msg: "Something went wrong" };
    super(error.msg);
    this.statusCode = 500;
    this.errors = [error];
  }
}

module.exports = InternalError;
