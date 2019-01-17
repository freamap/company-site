module.exports = {
  apiErrorResponse: (apiName, err, errorCode, message) => {
    console.log("API:" + apiName + "\nERR:" + err + "\nERROR_CODE:" + errorCode + "\nmessage:" + message)
    return {
      errorCode: errorCode,
      message: message
    }
  }
}