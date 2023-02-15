import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/motorcycle.service';
import Motorcycle from '../../../src/Domains/Motorcycle';

// Inputs and Outputs
const motorcycleInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleOutput: Motorcycle = new Motorcycle({
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
});

describe('Para camada SERVICE na rota MOTORCYCLES', function () {
  it('Deve criar uma MOTORCYCLE com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.create(motorcycleInput);

    // Assert
    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Deve retornar todas as MOTORCYCLES com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves([motorcycleOutput]);

    // Act
    const service = new MotorcycleService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal([motorcycleOutput]);
  });

  it('Deve retornar uma MOTORCYCLE pelo ID com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.getById('6348513f34c397abcad040b2');

    // Assert
    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Deve atualizar uma MOTORCYCLE com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.update('6348513f34c397abcad040b2', motorcycleInput);

    // Assert
    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Deve deletar uma MOTORCYCLE com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'findByIdAndDelete').resolves(motorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.delete('6348513f34c397abcad040b2');

    // Assert
    expect(result).to.be.deep.equal(motorcycleOutput);
  });
});
