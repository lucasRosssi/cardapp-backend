import { Dish } from '../../models/Dish';
import { Establishment } from '../../models/Establishment';
import { Menu } from '../../models/Menu';
import {
	IAddDishToMenuDTO,
	IAddMenuCategoryDTO,
	ICreateEstablishmentDTO,
	IDeleteMenuCategoryDTO,
	IEstablishmentsRepository,
	IFindMenuByCategory,
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

	create({
		email,
		name,
		picture,
		address,
		phone,
	}: ICreateEstablishmentDTO): void {
		const establishment = new Establishment();

		Object.assign(establishment, {
			email,
			name,
			picture,
			address,
			phone,
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

	findMenuByCategory({
		establishment_id,
		category,
	}: IFindMenuByCategory): Menu | undefined {
		const establishment = this.findById(establishment_id);

		if (establishment) {
			const menu = establishment.menus.find(
				(menu) => menu.category === category
			);

			return menu;
		}
	}

	addMenuCategory({ establishment_id, category }: IAddMenuCategoryDTO): void {
		const establishment = this.findById(establishment_id);

		if (establishment) {
			const menu = new Menu();

			Object.assign(menu, { category });

			establishment.menus.push(menu);
		}
	}

	addDishToMenu({
		establishment_id,
		category,
		name,
		price,
		picture,
		details,
	}: IAddDishToMenuDTO): void {
		const menu = this.findMenuByCategory({ establishment_id, category });

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

	deleteMenuCategory({
		establishment_id,
		category,
	}: IDeleteMenuCategoryDTO): void {
		const establishment = this.findById(establishment_id);

		if (establishment) {
			const menuIndex = establishment.menus.findIndex(
				(menu) => menu.category === category
			);

			if (menuIndex !== -1) {
				establishment.menus.splice(menuIndex, 1);
			}
		}
	}

	list(): Establishment[] {
		return this.establishments;
	}
}

export { EstablishmentsRepository };
