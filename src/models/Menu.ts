import { Dish } from './Dish';

class Menu {
	category: string;
	dishes: Dish[];

	constructor() {
		this.dishes = [];
	}
}

export { Menu };
