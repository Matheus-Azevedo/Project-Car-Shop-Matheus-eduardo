import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/car.service';
import HttpStatusCode from '../utils/HTTP_STATUS_CODE';

// Constants
const CAR_NOT_FOUND = 'Car not found';
const INVALID_MONGO_ID = 'Invalid mongo id';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const newCar = await this.service.create(car);
      return this.res.status(HttpStatusCode.CREATED).json(newCar);
    } catch (error) {
      return this.next(error);
    }
  }

  public async getAll() {
    try {
      const cars = await this.service.getAll();
      return this.res.status(HttpStatusCode.OK).json(cars);
    } catch (error) {
      return this.next(error);
    }
  }

  public async getById() {
    try {
      const car = await this.service.getById(this.req.params.id);
      if (car === null) {
        return this.res.status(HttpStatusCode.NOT_FOUND).json({ message: CAR_NOT_FOUND });
      }
      if (car === undefined) {
        return this.res
          .status(HttpStatusCode.UNPROCESSABLE_ENTITY)
          .json({ message: INVALID_MONGO_ID });
      }
      return this.res.status(HttpStatusCode.OK).json(car);
    } catch (error) {
      return this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const updatedCar = await this.service.update(id, car);
      if (updatedCar === null) {
        return this.res.status(HttpStatusCode.NOT_FOUND).json({ message: CAR_NOT_FOUND });
      }
      if (updatedCar === undefined) {
        return this.res
          .status(HttpStatusCode.UNPROCESSABLE_ENTITY)
          .json({ message: INVALID_MONGO_ID });
      }
      return this.res.status(HttpStatusCode.OK).json(updatedCar);
    } catch (error) {
      return this.next(error);
    }
  }

  public async delete() {
    try {
      const deletedCar = await this.service.delete(this.req.params.id);
      if (deletedCar === null) {
        return this.res.status(HttpStatusCode.NOT_FOUND).json({ message: CAR_NOT_FOUND });
      }
      if (deletedCar === undefined) {
        return this.res
          .status(HttpStatusCode.UNPROCESSABLE_ENTITY)
          .json({ message: INVALID_MONGO_ID });
      }
      return this.res.status(HttpStatusCode.OK).json(deletedCar);
    } catch (error) {
      return this.next(error);
    }
  }
}

export default CarController;
