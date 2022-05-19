import { EstablishmentsRepository } from '../../repositories/implementations/EstablishmentsRepository';

interface IRequest {
	email: string;
	name: string;
	picture: string;
	address: string;
}

class CreateEstablishmentService {
	constructor(private establishmentsRepository: EstablishmentsRepository) {}

	execute({ email, name, picture, address }: IRequest) {
		const emailAlreadyInUse = this.establishmentsRepository.findByEmail(email);
		if (emailAlreadyInUse) {
			throw new Error('Email is already in use!');
		}

		const establishmentAlreadyExists =
			this.establishmentsRepository.findByName(name);
		if (establishmentAlreadyExists) {
			throw new Error('Establishment already exists!');
		}

		this.establishmentsRepository.create({ email, name, picture, address });
	}
}

export { CreateEstablishmentService };
