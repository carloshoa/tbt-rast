const requestTrackingMiddleware = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`Receiving ${req.method} request to route ${req.path}`);
  next();
};

export default requestTrackingMiddleware;
