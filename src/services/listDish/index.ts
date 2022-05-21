import { EstablishmentsRepository } from '../../repositories/implementations/EstablishmentsRepository';
import { ListDishController } from './ListDishController';
import { ListDishService } from './ListDishService';

const establishmentsRepository = EstablishmentsRepository.getInstance();
const listDishService = new ListDishService(establishmentsRepository);
const listDishController = new ListDishController(listDishService);

export { listDishController }