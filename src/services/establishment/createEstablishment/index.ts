import { EstablishmentsRepository } from '../../../repositories/implementations/EstablishmentsRepository';
import { CreateEstablishmentController } from './CreateEstablishmentController';
import { CreateEstablishmentService } from './CreateEstablishmentService';

const establishmentsRepository = EstablishmentsRepository.getInstance();
const createEstablishmentService = new CreateEstablishmentService(
	establishmentsRepository
);
const createEstablishmentController = new CreateEstablishmentController(
	createEstablishmentService
);

export { createEstablishmentController };
