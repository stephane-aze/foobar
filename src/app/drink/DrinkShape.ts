import { DrinkModel } from './DrinkModel';

const NO_TITLE = 'No Title';

export class DrinkShape {
  public _id!: number;
  public  libelle!: string;
  public  description!: string;
  public  recipe!: string[];
  public  bar!: string;
  public  price!: number;
  public  img!: string;
  public isAlcohol!: boolean;

  constructor(data: DrinkModel) {
    this._id=data._id;
    this.libelle=data.libelle;
    this.description=data.description;
    this.recipe=data.recipe;
    this.bar=data.bar;
    this.price=data.price;
    this.img=data.img;
    this.isAlcohol= data.isAlcohol;

  }

  public static NEW(data: DrinkModel): DrinkShape {
    return new DrinkShape(data);
  }

  public static NEW_BUNCH(data: DrinkModel[]): DrinkShape[] {
    return data.map(DrinkShape.NEW);
  }

}
