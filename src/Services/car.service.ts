import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/Car.ODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async getById(id: string): Promise<Car | null | undefined> {
    const carODM = new CarODM();
    const car = await carODM.getById(id);
    if (car === undefined) {
      return undefined;
    }
    return this.createCarDomain(car);
  }

  public async update(id: string, car: ICar): Promise<Car | null | undefined> {
    const carODM = new CarODM();
    const updatedCar = await carODM.update(id, car);
    if (updatedCar === undefined) {
      return undefined;
    }
    return this.createCarDomain(updatedCar);
  }
}

export default CarService;
