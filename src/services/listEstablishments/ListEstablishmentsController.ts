import { Request, Response } from 'express';
import { ListEstablishmentsService } from './ListEstablishmentsService';

class ListEstablishmentsController {
	constructor(private listEstablishmentsService: ListEstablishmentsService) {}

	handle(request: Request, response: Response) {
		const list = this.listEstablishmentsService.execute();

		return response.status(200).json(list);
	}
}

export { ListEstablishmentsController };
