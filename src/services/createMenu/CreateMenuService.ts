import { EstablishmentsRepository } from '../../repositories/implementations/EstablishmentsRepository';

interface IRequest {
	establishment_id: string;
	category: string;
}

class CreateMenuService {
	constructor(private establishmentsRespository: EstablishmentsRepository) {}

	execute({ establishment_id, category }: IRequest) {
		const establishment =
			this.establishmentsRespository.findById(establishment_id);
		if (!establishment) {
			throw new ReferenceError('Establishment not found');
		}

		const categoryAlreadyExists = establishment.menus.find(
			(menu) => menu.category === category
		);
		if (categoryAlreadyExists) {
			throw new Error('Category already exists!');
		}

		this.establishmentsRespository.addMenuCategory(establishment_id, category);
	}
}

export { CreateMenuService };
