const BaseError = require("./BaseError");

class ResourceNotFoundError extends BaseError {
  constructor(resource, query) {
    super(`Resource ${resource} was not found.`);
    this.statusCode = 404;
    this.errors = [
      {
        msg: `Resource ${resource} with the id ${query} was not found.`,
      },
    ];
  }
}

module.exports = ResourceNotFoundError;
