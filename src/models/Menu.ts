import { v4 as uuidv4 } from 'uuid';
import { Dish } from './Dish';

class Menu {
	id: string;
	category: string;
	dishes: Dish[];

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}

		this.dishes = [];
	}
}

export { Menu };
