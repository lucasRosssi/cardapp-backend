import { Establishment } from '../models/Establishment';
import { Menu } from '../models/Menu';

interface ICreateEstablishmentDTO {
	email: string;
	name: string;
	picture: string;
	address: string;
}

interface IFindMenuByCategory {
	establishment_id: string;
	category: string;
}

interface IAddMenuCategoryDTO {
	establishment_id: string;
	category: string;
}

interface IAddDishToMenuDTO {
	establishment_id: string;
	category: string;
	name: string;
	price: number;
	picture: string;
	details: string;
}

interface IDeleteMenuCategoryDTO {
	establishment_id: string;
	category: string;
}

interface IEstablishmentsRepository {
	create({ email, name, picture, address }: ICreateEstablishmentDTO): void;
	findById(id: string): Establishment | undefined;
	findByName(name: string): Establishment | undefined;
	findByEmail(email: string): Establishment | undefined;
	findMenuByCategory({ establishment_id, category }: IFindMenuByCategory): Menu | undefined;
	addMenuCategory({establishment_id, category}: IAddMenuCategoryDTO): void;
	addDishToMenu({establishment_id, category, name, price, picture, details}: IAddDishToMenuDTO): void;
	deleteMenuCategory({ establishment_id, category }: IDeleteMenuCategoryDTO): void;
	list(): Establishment[];
}

export {
	ICreateEstablishmentDTO,
	IFindMenuByCategory,
	IAddMenuCategoryDTO,
	IAddDishToMenuDTO,
	IDeleteMenuCategoryDTO,
	IEstablishmentsRepository
};
