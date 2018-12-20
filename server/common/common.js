module.exports = {
  createApiErrorResponse: (errorCode, message) => {
    return {
      errorCode: errorCode,
      message: message
    }
  }
}