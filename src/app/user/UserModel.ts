export interface UserModel {
  _id?: number;
  pseudo?: string;
  password?: string;
  previousOrders?: [string];
  createDate: string;
  deleteDate?: Date;
  age?: number;
  email?: string;
  favoriteDrink?: number;
  favoriteBar?: number;
  token?: string;
}
