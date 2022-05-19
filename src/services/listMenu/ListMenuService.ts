import { EstablishmentsRepository } from '../../repositories/implementations/EstablishmentsRepository';

interface IRequest {
	establishment_id: string;
}

class ListMenuService {
	constructor(private establishmentsRepository: EstablishmentsRepository) {}

	execute({ establishment_id }: IRequest) {
		const establishment =
			this.establishmentsRepository.findById(establishment_id);

		if (!establishment) {
			throw new Error('Establishment not found');
		}

		return establishment.menus;
	}
}

export { ListMenuService };
