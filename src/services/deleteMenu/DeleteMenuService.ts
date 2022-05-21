import { EstablishmentsRepository } from '../../repositories/implementations/EstablishmentsRepository';

interface IRequest {
	establishment_id: string;
	category: string;
}

class DeleteMenuService {
	constructor(private establishmentsRepository: EstablishmentsRepository) {}

	execute({ establishment_id, category }: IRequest) {
		const menu = this.establishmentsRepository.findMenuByCategory({ establishment_id, category })

		if (!menu) {
			throw new Error('Menu not found')
		}
		
		this.establishmentsRepository.deleteMenuCategory({ establishment_id, category })
	}
}

export { DeleteMenuService }