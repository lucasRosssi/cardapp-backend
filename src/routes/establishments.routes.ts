import { Router } from 'express';

import { createDishController } from '../services/establishment/createDish';
import { createEstablishmentController } from '../services/establishment/createEstablishment';
import { createMenuController } from '../services/establishment/createMenu';
import { deleteMenuController } from '../services/establishment/deleteMenu';
import { listDishController } from '../services/establishment/listDish';
import { listEstablishmentsController } from '../services/establishment/listEstablishments';
import { listMenuController } from '../services/establishment/listMenu';

const establishmentsRoutes = Router();

establishmentsRoutes.post('/', (request, response) => {
	return createEstablishmentController.handle(request, response);
});

establishmentsRoutes.get('/', (request, response) => {
	return listEstablishmentsController.handle(request, response);
});

establishmentsRoutes.post('/:establishment_id/menu', (request, response) => {
	return createMenuController.handle(request, response);
});

establishmentsRoutes.get('/:establishment_id/menu', (request, response) => {
	return listMenuController.handle(request, response);
});

establishmentsRoutes.post(
	'/:establishment_id/menu/:category/dishes',
	(request, response) => {
		return createDishController.handle(request, response);
	}
);

establishmentsRoutes.get(
	'/:establishment_id/menu/:category/dishes',
	(request, response) => {
		return listDishController.handle(request, response);
	}
);

establishmentsRoutes.delete('/:establishment_id/menu', (request, response) => {
	return deleteMenuController.handle(request, response);
});

export { establishmentsRoutes };
