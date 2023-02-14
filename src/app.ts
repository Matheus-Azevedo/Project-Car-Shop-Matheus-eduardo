// Starting project Car Shop
import express from 'express';
import carRouter from './routes/car.routes';
import motorcycleRouter from './routes/motorcycle.routes';

const app = express();
app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorcycleRouter);

export default app;
