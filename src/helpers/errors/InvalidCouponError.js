const BaseError = require("./BaseError");

class InvalidCouponError extends BaseError {
  constructor(errors) {
    super(`Invalid Coupon Error`);
    this.statusCode = 422;
    this.errors = errors;
  }
}
module.exports = InvalidCouponError;
