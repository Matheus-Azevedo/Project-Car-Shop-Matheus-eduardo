import { Router } from 'express';
import MotorcycleController from '../Controllers/motorcycle.controller';

const motorcycleRouter = Router();

motorcycleRouter.get('/', (req, res, next) => new MotorcycleController(req, res, next).getAll());
motorcycleRouter.get(
  '/:id', 
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);
motorcycleRouter.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());
motorcycleRouter.put('/:id', (req, res, next) => new MotorcycleController(req, res, next).update());
motorcycleRouter.delete(
  '/:id', 
  (req, res, next) => new MotorcycleController(req, res, next).delete(),
);

export default motorcycleRouter;