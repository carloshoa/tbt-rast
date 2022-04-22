import express from 'express';
import dotenv from 'dotenv';

import initMongoConnection from './database/mongodbConfig';

import appRoutes from './routes';

import requestTrackingMiddleware from './middlewares/requestTracking';
import errorHandlingMiddleware from './middlewares/errorHandling';
import resourceNotFoundMiddleware from './middlewares/resourceNotFound';

dotenv.config();
const app = express();

initMongoConnection();

app.use(express.json());
app.use(requestTrackingMiddleware);

app.use('/api', appRoutes);

app.use(errorHandlingMiddleware);
app.use(resourceNotFoundMiddleware);

// eslint-disable-next-line no-console
app.listen(process.env.PORT, () => console.log(`App connected at PORT ${process.env.PORT}`));
