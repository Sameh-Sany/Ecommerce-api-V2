const BaseError = require("./BaseError");

class ResourceAlreadyExistError extends BaseError {
  constructor(resource, query) {
    super(`The Field ${resource} with value ${query} Already Exist.`);
    this.statusCode = 422;
    this.errors = [
      {
        msg: `The Field ${resource} with value ${query} Already Exist.`,
        param: resource,
        value: query,
      },
    ];
  }
}

module.exports = ResourceAlreadyExistError;
