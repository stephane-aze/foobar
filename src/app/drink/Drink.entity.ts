import { DrinkShape }  from './DrinkShape';

export class Drink {
  public constructor(public readonly _id : number,
    public readonly libelle : string,
    public readonly description : string,
    public readonly recipe : string[],
    public readonly bar : string,
    public readonly price : number,
    public readonly img : string,
    public readonly isAlcohol : boolean) {}

  public static NEW(data: DrinkShape) : Drink {
    return new Drink(data._id,
    data.libelle,
    data.description,
    data.recipe,
    data.bar,
    data.price,
    data.img,
    data.isAlcohol,
    );
  }
  public static NEW_BUNCH(data: DrinkShape[]): Drink[] {
    return data.map(Drink.NEW);
  }
}
