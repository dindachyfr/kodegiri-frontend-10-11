const response = (res, result, statusCode, message) => {
    res.json({
      status: "Success",
      responseCode: statusCode,
      data: result,
      responseMessage: message
    });
  };

  module.exports ={
      response
}