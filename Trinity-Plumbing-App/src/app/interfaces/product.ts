export interface ProductResponse {
  _id: string;
  name: string;
  description: string;
  categoryID: {
    _id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  };
  price: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}
