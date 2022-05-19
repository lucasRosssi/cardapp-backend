import { v4 as uuidv4 } from 'uuid';

class Establishment {
	id: string;
	email: string;
	name: string;
	picture: string;
	address: string;

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}
	}
}

export { Establishment };
