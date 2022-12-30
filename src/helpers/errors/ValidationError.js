const BaseError = require("./BaseError");

class ValidationError extends BaseError {
  constructor(errors) {
    super(`Validation Error`);
    this.statusCode = 422;
    this.errors = errors;
  }
}

module.exports = ValidationError;
