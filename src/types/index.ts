export interface MenuItemInterface {
  id: number;
  name: string;
  price: number;
}

export interface OrderItemInterface extends MenuItemInterface {
  quantity: number;
}