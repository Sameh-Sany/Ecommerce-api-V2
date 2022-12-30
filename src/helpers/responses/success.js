const responseSuccess = (data, statusCode = 200) => {
  return { success: true, statusCode, data };
};

module.exports = responseSuccess;
