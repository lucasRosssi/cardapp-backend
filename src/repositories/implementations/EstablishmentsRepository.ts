import { Establishment } from '../../models/Establishment';
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

	findByName(name: string): Establishment | undefined {
		const establishment = this.establishments.find(
			(establishment) => establishment.name === name
		);

		return establishment;
	}

	list(): Establishment[] {
		return this.establishments;
	}
}

export { EstablishmentsRepository };
