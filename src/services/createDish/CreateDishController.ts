import { Request, Response } from 'express';
import { CreateDishService } from './CreateDishService';

class CreateDishController {
	constructor(private createDishService: CreateDishService) {}

	handle(request: Request, response: Response) {
		const { establishment_id, category } = request.params;
		const { name, price, picture, details } = request.body;

		try {
			this.createDishService.execute({ establishment_id, category, name, price, picture, details });

			return response.status(201).json({ message: 'Successfully created new dish' });
		} catch (error: any) {
			let status = 400;

			if (error instanceof ReferenceError) {
				status = 404;
			}

			return response.status(status).json({ error: error.message })
		}
	}
}

export { CreateDishController }