/* eslint-disable no-console */
import { connect } from 'mongoose';

const initMongoConnection = () => {
  connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to database.'))
    .catch((error) => console.log(error));
};

export default initMongoConnection;
