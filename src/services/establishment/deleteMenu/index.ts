import { EstablishmentsRepository } from '../../../repositories/implementations/EstablishmentsRepository';
import { DeleteMenuController } from './DeleteMenuController';
import { DeleteMenuService } from './DeleteMenuService';

const establishmentsRepository = EstablishmentsRepository.getInstance();
const deleteMenuService = new DeleteMenuService(establishmentsRepository);
const deleteMenuController = new DeleteMenuController(deleteMenuService);

export { deleteMenuController };
