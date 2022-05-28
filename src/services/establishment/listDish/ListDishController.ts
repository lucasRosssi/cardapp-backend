import { Request, Response } from 'express';
import { ListDishService } from './ListDishService';

class ListDishController {
	constructor(private listDishService: ListDishService) {}

	handle(request: Request, response: Response) {
		const { establishment_id, category } = request.params;

		try {
			const list = this.listDishService.execute({ establishment_id, category });

			return response.status(200).json(list);
		} catch (error: any) {
			return response.status(404).json({ error: error.message });
		}
	}
}

export { ListDishController }