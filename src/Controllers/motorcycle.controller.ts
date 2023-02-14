import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/motorcycle.service';
import HttpStatusCode from '../utils/HTTP_STATUS_CODE';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(HttpStatusCode.CREATED).json(newMotorcycle);
    } catch (error) {
      return this.next(error);
    }
  }

  public async getAll() {
    try {
      const motorcycles = await this.service.getAll();
      return this.res.status(HttpStatusCode.OK).json(motorcycles);
    } catch (error) {
      return this.next(error);
    }
  }

  public async getById() {
    try {
      const motorcycle = await this.service.getById(this.req.params.id);
      if (motorcycle === null) {
        return this.res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Motorcycle not found' });
      }
      if (motorcycle === undefined) {
        return this.res
          .status(HttpStatusCode.UNPROCESSABLE_ENTITY)
          .json({ message: 'Invalid mongo id' });
      }
      return this.res.status(HttpStatusCode.OK).json(motorcycle);
    } catch (error) {
      return this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const updatedMotorcycle = await this.service.update(id, motorcycle);
      if (updatedMotorcycle === null) {
        return this.res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Motorcycle not found' });
      }
      if (updatedMotorcycle === undefined) {
        return this.res
          .status(HttpStatusCode.UNPROCESSABLE_ENTITY)
          .json({ message: 'Invalid mongo id' });
      }
      return this.res.status(HttpStatusCode.OK).json(updatedMotorcycle);
    } catch (error) {
      return this.next(error);
    }
  }
}

export default MotorcycleController;