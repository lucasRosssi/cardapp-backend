import { EstablishmentsRepository } from '../../../repositories/implementations/EstablishmentsRepository';

class ListEstablishmentsService {
	constructor(private establishmentsRepository: EstablishmentsRepository) {}

	execute() {
		const establishmentsList = this.establishmentsRepository.list();

		return establishmentsList;
	}
}

export { ListEstablishmentsService };
