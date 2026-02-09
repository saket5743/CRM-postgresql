const responseObject = (data, error, message, statusCode) => {
  return {
    statusCode,
    error,
    message,
    data
  };
};

export default responseObject;
