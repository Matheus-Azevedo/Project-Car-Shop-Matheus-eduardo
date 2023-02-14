import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/Motorcycle.ODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.getAll();
    return motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  }

  public async getById(id: string): Promise<Motorcycle | null | undefined> {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.getById(id);
    if (motorcycle === undefined) {
      return undefined;
    }
    return this.createMotorcycleDomain(motorcycle);
  }

  public async update(id: string, motorcycle: IMotorcycle): Promise<Motorcycle | null | undefined> {
    const motorcycleODM = new MotorcycleODM();
    const updatedMotorcycle = await motorcycleODM.update(id, motorcycle);
    if (updatedMotorcycle === undefined) {
      return undefined;
    }
    return this.createMotorcycleDomain(updatedMotorcycle);
  }
}

export default MotorcycleService;
