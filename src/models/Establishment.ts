import { v4 as uuidv4 } from 'uuid';
import { Menu } from './Menu';

class Establishment {
	id: string;
	email: string;
	name: string;
	picture: string;
	address: string;
	menus: Menu[];

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}

		this.menus = [];
	}
}

export { Establishment };
