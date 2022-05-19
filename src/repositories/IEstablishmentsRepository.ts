import { Establishment } from '../models/Establishment';

interface ICreateEstablishmentDTO {
	email: string;
	name: string;
	picture: string;
	address: string;
}

interface IEstablishmentsRepository {
	findByName(name: string): Establishment | undefined;
	list(): Establishment[];
	create({ email, name, picture, address }: ICreateEstablishmentDTO): void;
}

export { ICreateEstablishmentDTO, IEstablishmentsRepository };
