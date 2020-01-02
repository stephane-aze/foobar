import { DrinkModel }  from './DrinkModel';

export class Drink {
  id: number;
  libelle: string;
  description: string;
  recipe : [ string ];
  bar: string;
  price: number;

  public constructor(data: DrinkModel) {
    this.id = data.id;
    this.libelle = data.libelle;
    this.description = data.description;
    this.recipe = data.recipe;
    this.bar = data.bar;
    this.price = data.price;
  }
  public static NEW(data: DrinkModel): Drink {
    return new Drink(data);
  }
}
