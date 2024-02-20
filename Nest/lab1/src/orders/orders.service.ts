import { Injectable } from '@nestjs/common';
import  {orders}  from "../../data.js";

@Injectable()
export class OrdersService {
 
  findAll() {
    return orders;
  }

  create(newOrder: any) {
    let lastOrderID = orders[orders.length - 1].id;
    newOrder.id = lastOrderID + 1;
    orders.push(newOrder);
  }

  findOne(id: number) {
    return orders.find((order) => order.id === id);
  }

  update(id: number, updatedOrder: any) {
    return orders.map((order) => {
      if (order.id === id) {
        return { ...order, ...updatedOrder }
      }
      return order;
    }
    );
  }

  remove(id: number) {
    return orders.filter((order) => order.id !== id);
  }

  findProducts(id: number) {
    return orders.find((order) => order.id === id).products;
  }
}
