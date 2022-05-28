import { Request, Response } from 'express';
import { CreateMenuService } from './CreateMenuService';

class CreateMenuController {
	constructor(private createMenuService: CreateMenuService) {}

	handle(request: Request, response: Response) {
		const { establishment_id } = request.params;
		const { category } = request.body;

		try {
			this.createMenuService.execute({ establishment_id, category });

			return response
				.status(201)
				.json({ message: 'Successfully added new menu category!' });
		} catch (error: any) {
			let status = 400

			if (error instanceof ReferenceError) {
				status = 404;
			}

			return response.status(status).json({ error: error.message });
		}
	}
}

export { CreateMenuController };
