const { isValidObjectId } = require("mongoose");
const { param } = require("express-validator");

exports.paramsValidation = (field) => [
  param(field)
    .notEmpty()
    .withMessage(`${field} is required`)
    .custom((value) => {
      if (!isValidObjectId(value)) return Promise.reject();
      return true;
    })
    .withMessage(`${field} is maleformed`),
];
