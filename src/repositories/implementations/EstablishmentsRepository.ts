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

	list(): Establishment[] {
		return this.establishments;
	}
}

export { EstablishmentsRepository };
