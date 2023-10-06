export class Ressource {
  id: number;
  name: string;
  id_user: number;
  quantity: number;

  constructor(id: number, name: string, price: number, id_user: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.id_user = id_user;
    this.quantity = quantity;

  }
}
