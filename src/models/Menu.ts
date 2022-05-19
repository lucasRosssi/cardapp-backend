import { v4 as uuidv4 } from 'uuid';

class Menu {
	id: string;
	category: string;
	dishes: [];

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}
	}
}

export { Menu };
