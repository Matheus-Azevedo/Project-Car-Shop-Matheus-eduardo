import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/car.service';
import Car from '../../../src/Domains/Car';

// Inputs and Outputs
const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutput: Car = new Car({
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
});

describe('Para camada SERVICE na rota CARS', function () {
  it('Deve criar um CAR com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'create').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.create(carInput);

    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deve retornar todos os CARS com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves([carOutput]);

    // Act
    const service = new CarService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal([carOutput]);
  });

  it('Deve retornar um CAR pelo ID com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.getById('6348513f34c397abcad040b2');

    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deve atualizar um CAR pelo ID com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);
    
    // Act
    const service = new CarService();
    const result = await service.update('6348513f34c397abcad040b2', carInput);

    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deve deletar um CAR pelo ID com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'findByIdAndDelete').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.delete('6348513f34c397abcad040b2');

    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});