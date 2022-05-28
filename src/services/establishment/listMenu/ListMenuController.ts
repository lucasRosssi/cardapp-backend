import { Request, Response } from 'express';
import { ListMenuService } from './ListMenuService';

class ListMenuController {
	constructor(private listMenuService: ListMenuService) {}

	handle(request: Request, response: Response) {
		const { establishment_id } = request.params;

		try {
			const list = this.listMenuService.execute({ establishment_id });

			return response.status(200).json(list);
		} catch (error: any) {
			return response.status(404).json({ error: error.message });
		}
	}
}

export { ListMenuController };
