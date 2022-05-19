import { v4 as uuidv4 } from 'uuid';
import { CommentDTO } from '../dtos/CommentDTO';

class Dish {
	id: string;
	name: string;
	price: number;
	picture: string;
	details: string;
	like_count: number;
	comments: CommentDTO[];

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}

		this.like_count = 0;
		this.comments = [];
	}
}

export { Dish };
