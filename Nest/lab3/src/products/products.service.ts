import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel("products") private productModel) {}

  async create(product: any) {
    const newProduct = await new this.productModel(product);
    return newProduct.save()
  }

  async findAll() {
    const allProducts = await this.productModel.find()
    return allProducts
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec()
    if (!product) {
      return "product not found"
    }
    return product
  }

  async update(id: string, newProduct) {
    const product = await this.productModel.findByIdAndUpdate(id, newProduct)
    if (!product) {
      return "product not found"
    }
    return product
  }

  async remove(id: string) {
    const product = await this.productModel.findByIdAndDelete(id).exec()
    if (!product) {
      return "product not found"
    }
    return product
  }
}
