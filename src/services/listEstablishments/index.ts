import { EstablishmentsRepository } from '../../repositories/implementations/EstablishmentsRepository';
import { ListEstablishmentsController } from './ListEstablishmentsController';
import { ListEstablishmentsService } from './ListEstablishmentsService';

const establishmentsRepository = EstablishmentsRepository.getInstance();
const listEstablishmentsService = new ListEstablishmentsService(
	establishmentsRepository
);
const listEstablishmentsController = new ListEstablishmentsController(
	listEstablishmentsService
);

export { listEstablishmentsController };
