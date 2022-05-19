import { Request, Response } from 'express';
import { CreateEstablishmentService } from './CreateEstablishmentService';

class CreateEstablishmentController {
	constructor(private createEstablishmentService: CreateEstablishmentService) {}

	handle(request: Request, response: Response) {
		const { email, name, picture, address } = request.body;

		try {
			this.createEstablishmentService.execute({
				email,
				name,
				picture,
				address,
			});
		} catch (error: any) {
			return response.status(400).json({ error: error.message });
		}

		return response
			.status(201)
			.json({ message: 'Establishment successfully created!' });
	}
}

export { CreateEstablishmentController };
