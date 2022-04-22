// eslint-disable-next-line no-unused-vars
const errorHandlingMiddleware = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  res.status(err.status || 500).json({ message: err.message || 'A problem occured. Please try again later' });
};

export default errorHandlingMiddleware;
