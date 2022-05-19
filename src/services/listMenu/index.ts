import { EstablishmentsRepository } from '../../repositories/implementations/EstablishmentsRepository';
import { ListMenuController } from './ListMenuController';
import { ListMenuService } from './ListMenuService';

const establishmentsRepository = EstablishmentsRepository.getInstance();
const listMenuService = new ListMenuService(establishmentsRepository);
const listMenuController = new ListMenuController(listMenuService);

export { listMenuController };
