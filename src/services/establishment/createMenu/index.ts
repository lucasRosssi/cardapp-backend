import { EstablishmentsRepository } from '../../../repositories/implementations/EstablishmentsRepository';
import { CreateMenuController } from './CreateMenuController';
import { CreateMenuService } from './CreateMenuService';

const establishmentsRespository = EstablishmentsRepository.getInstance();
const createMenuService = new CreateMenuService(establishmentsRespository);
const createMenuController = new CreateMenuController(createMenuService);

export { createMenuController };
