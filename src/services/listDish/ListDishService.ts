import { EstablishmentsRepository } from '../../repositories/implementations/EstablishmentsRepository';

interface IRequest {
	establishment_id: string;
	menu_id: string;
}

class ListDishService {
	constructor(private establishmentsRepository: EstablishmentsRepository) {}

	execute({ establishment_id, menu_id }: IRequest) {
		const establishment = this.establishmentsRepository.findById(establishment_id);

		if (!establishment) {
			throw new Error('Establishment not found');
		}

		const menu = establishment.menus.find(menu => menu.id === menu_id);

		if (!menu) {
			throw new Error('Menu not found');
		}

		return menu.dishes
	}
}

export { ListDishService }