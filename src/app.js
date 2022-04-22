import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use((req, res, next) => {
  console.log(`Receiving ${req.method} request to route ${req.path}`);
  next();
});

app.get('/', (req, res, next) => {
  try{
    asdasdasd
    res.json({ message: 'Hello TBT' });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.log(err);

  res.status(err.status || 500).json({ message: err.message || 'A problem occured. Please try again later' });
});

app.use((req, res) => res.status(404).json({ message: `Resource "${req.method}" to "${req.path}" not found`}))

app.listen(process.env.PORT, () => console.log(`App connected at PORT ${process.env.PORT}`));
