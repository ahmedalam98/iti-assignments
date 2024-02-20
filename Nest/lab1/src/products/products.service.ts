import { Injectable } from '@nestjs/common';
import  {orders}  from "../../data.js";

const products = orders.map((order) => order.products).flat();

@Injectable()
export class ProductsService {
  create(orderID: number, newProduct: any) {
    return orders.find((order) => order.id === orderID).products.push(newProduct);
  }

  findAll() {
    return products;
  }

  findOne(id: number) {
    return products.find((product) => product.id === id);
  }

  update(id: number, updatedProduct: any) {
    return products.map((product) => {
      if (product.id === id) {
        return { ...product, ...updatedProduct }
      }
      return product;
    }
    );
  }

  remove(id: number) {
    return products.filter((product) => product.id !== id);
  }
}
