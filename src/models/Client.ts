import { v4 as uuidv4 } from 'uuid';

class Client {
	id: string;
	email: string;
	name: string;
	picture: string;
	location: string;

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}
	}
}

export { Client };
