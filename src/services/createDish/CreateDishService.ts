import { EstablishmentsRepository } from '../../repositories/implementations/EstablishmentsRepository';

interface IRequest {
	establishment_id: string;
	category: string;
	name: string;
	price: number;
	picture: string;
	details: string;
}

class CreateDishService {
	constructor(private establishmentsRepository: EstablishmentsRepository) {}

	execute({ establishment_id, category, name, price, picture, details }: IRequest): void {
		const menu = this.establishmentsRepository.findMenuByCategory({ establishment_id, category })

		if (!menu) {
			throw new ReferenceError('Menu not found')
		}

		const dishAlreadyExists = menu.dishes.find(dish => dish.name === name)

		if (dishAlreadyExists) {
			throw new Error('Dish already exists!');
		}

		this.establishmentsRepository.addDishToMenu({ establishment_id, category, name, price, picture, details })
	}
}

export { CreateDishService }