import { Router } from 'express';
import CarController from '../Controllers/car.controller';

const carRouter = Router();

carRouter.get('/', (req, res, next) => new CarController(req, res, next).getAll());
carRouter.get('/:id', (req, res, next) => new CarController(req, res, next).getById());
carRouter.post('/', (req, res, next) => new CarController(req, res, next).create());

export default carRouter;
