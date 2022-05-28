import { EstablishmentsRepository } from '../../../repositories/implementations/EstablishmentsRepository';
import { CreateDishController } from './CreateDishController';
import { CreateDishService } from './CreateDishService';

const establishmentsRepository = EstablishmentsRepository.getInstance();
const createDishService = new CreateDishService(establishmentsRepository);
const createDishController = new CreateDishController(createDishService);

export { createDishController };
