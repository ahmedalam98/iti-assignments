import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './orders.schema';
import { ProductSchema } from 'src/products/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: "orders",
      schema: OrderSchema
    }, {
      name: "products",
      schema: ProductSchema
    }])
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}