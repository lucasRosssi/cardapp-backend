import { Request, Response } from 'express';
import { DeleteMenuService } from './DeleteMenuService';

class DeleteMenuController {
	constructor(private deleteMenuService: DeleteMenuService) {}

	handle(request: Request, response: Response) {
		const { establishment_id } = request.params;
		const { category } = request.body;

		try {
			this.deleteMenuService.execute({ establishment_id, category })

			return response.status(200).json({ message: `Category '${category}' successfully deleted` })
		} catch (error: any) {
			return response.status(404).json({ error: error.message })
		}
	}
}

export { DeleteMenuController }