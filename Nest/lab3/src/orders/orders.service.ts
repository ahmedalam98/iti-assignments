import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class OrdersService {
  constructor(@InjectModel("products") private productModel, @InjectModel("orders") private orderModel) {}
  async create(order) {
    const newOrder = await new this.orderModel(order);
    return newOrder.save()
  }

  async findAll() {
    const allOrders = await this.orderModel.find()
    return allOrders
  }

  async findOne(id: string) {
    const order = await this.orderModel.findById(id).exec()
    if (!order) {
      return "order not found"
    }
    return order
  }

  async update(id: string, newOrder) {
    const order = await this.orderModel.findByIdAndUpdate(id, newOrder)
    if (!order) {
      return "order not found"
    }
    return order
  }

  async remove(id: string) {
    const order = await this.orderModel.findByIdAndDelete(id).exec()
    if (!order) {
      return "order not found"
    }
    return order
  }

  async getProductsByOrderId(id: string) {
    const order = await this.orderModel.findById(id).exec();
    if (!order) {
      return "Not found";
    }

    const productIds = order.products; 
    
    const products = await this.productModel.find({ _id: { $in: productIds } }).exec();

    return products;
  }
}
