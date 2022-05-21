import { CommentDTO } from '../dtos/CommentDTO';

class Dish {
	name: string;
	price: number;
	picture: string;
	details: string;
	like_count: number;
	comments: CommentDTO[];

	constructor() {
		this.like_count = 0;
		this.comments = [];
	}
}

export { Dish };
