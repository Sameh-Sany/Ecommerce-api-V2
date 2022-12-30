const BaseError = require("./BaseError");

class ExpireCouponError extends BaseError {
  constructor(error = { msg: "Coupon Date Expired" }) {
    super(error.msg);
    this.statusCode = 400;
    this.errors = [error];
  }
}

module.exports = ExpireCouponError;
