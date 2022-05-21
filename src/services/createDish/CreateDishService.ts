import { EstablishmentsRepository } from '../../repositories/implementations/EstablishmentsRepository';

interface IRequest {
	establishment_id: string;
	menu_id: string;
	name: string;
	price: number;
	picture: string;
	details: string;
}

class CreateDishService {
	constructor(private establishmentsRepository: EstablishmentsRepository) {}

	execute({ establishment_id, menu_id, name, price, picture, details }: IRequest): void {
		const establishment = this.establishmentsRepository.findById(establishment_id);

		if (!establishment) {
			throw new ReferenceError('Establishment not found');
		}

		const menu = establishment.menus.find(menu => menu.id === menu_id);

		if (!menu) {
			throw new ReferenceError('Menu not found');
		}

		const dishAlreadyExists = menu.dishes.find(dish => dish.name === name)

		if (dishAlreadyExists) {
			throw new Error('Dish already exists!');
		}

		this.establishmentsRepository.addDishToMenu(establishment_id, menu_id, name, price, picture, details)
	}
}

export { CreateDishService }