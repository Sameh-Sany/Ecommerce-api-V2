class BaseError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.success = false;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = BaseError;
