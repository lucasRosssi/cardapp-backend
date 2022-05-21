import { Establishment } from '../models/Establishment';

interface ICreateEstablishmentDTO {
	email: string;
	name: string;
	picture: string;
	address: string;
}

interface IEstablishmentsRepository {
	create({ email, name, picture, address }: ICreateEstablishmentDTO): void;
	findById(id: string): Establishment | undefined;
	findByName(name: string): Establishment | undefined;
	findByEmail(email: string): Establishment | undefined;
	addMenuCategory(id: string, category: string): void;
	addDishToMenu(establishment_id: string, menu_id: string, name: string, price: number, picture: string, details: string): void;
	list(): Establishment[];
}

export { ICreateEstablishmentDTO, IEstablishmentsRepository };
