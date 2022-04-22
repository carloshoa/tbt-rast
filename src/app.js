import express from 'express';
import dotenv from 'dotenv';

import initMongoConnection from './database/mongodbConfig';

import requestTrackingMiddleware from './middlewares/requestTracking';
import errorHandlingMiddleware from './middlewares/errorHandling';
import resourceNotFoundMiddleware from './middlewares/resourceNotFound';

dotenv.config();
const app = express();
initMongoConnection();

app.use(requestTrackingMiddleware);

app.get('/tbt', (req, res, next) => {
  try {
    res.json({ message: 'Hello TBT' });
  } catch (error) {
    next(error);
  }
});

app.use(errorHandlingMiddleware);
app.use(resourceNotFoundMiddleware);

// eslint-disable-next-line no-console
app.listen(process.env.PORT, () => console.log(`App connected at PORT ${process.env.PORT}`));
