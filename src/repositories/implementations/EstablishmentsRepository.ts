import { Dish } from '../../models/Dish';
import { Establishment } from '../../models/Establishment';
import { Menu } from '../../models/Menu';
import {
	ICreateEstablishmentDTO,
	IEstablishmentsRepository,
} from '../IEstablishmentsRepository';

class EstablishmentsRepository implements IEstablishmentsRepository {
	private establishments: Establishment[];

	private static INSTANCE: EstablishmentsRepository;

	constructor() {
		this.establishments = [];
	}

	public static getInstance(): EstablishmentsRepository {
		if (!EstablishmentsRepository.INSTANCE) {
			EstablishmentsRepository.INSTANCE = new EstablishmentsRepository();
		}

		return EstablishmentsRepository.INSTANCE;
	}

	create({ email, name, picture, address }: ICreateEstablishmentDTO): void {
		const establishment = new Establishment();

		Object.assign(establishment, {
			email,
			name,
			picture,
			address,
		});

		this.establishments.push(establishment);
	}

	findById(id: string): Establishment | undefined {
		const establishment = this.establishments.find(
			(establishment) => establishment.id === id
		);

		return establishment;
	}

	findByName(name: string): Establishment | undefined {
		const establishment = this.establishments.find(
			(establishment) => establishment.name === name
		);

		return establishment;
	}

	findByEmail(email: string): Establishment | undefined {
		const establishment = this.establishments.find(
			(establishment) => establishment.email === email
		);

		return establishment;
	}

	addMenuCategory(id: string, category: string): void {
		const establishment = this.findById(id);

		if (establishment) {
			const menu = new Menu();

			Object.assign(menu, { category });

			establishment.menus.push(menu);
		}
	}

	addDishToMenu(establishment_id: string, menu_id: string, name: string, price: number, picture: string, details: string): void {
		const establishment = this.findById(establishment_id);

		if (establishment) {
			const menu = establishment.menus.find(menu => menu.id === menu_id);

			if (menu) {
				const dish = new Dish();

				Object.assign(dish, {
					name,
					price,
					picture,
					details,
				});

				menu.dishes.push(dish);
			}
		}
	}

	list(): Establishment[] {
		return this.establishments;
	}
}

export { EstablishmentsRepository };
