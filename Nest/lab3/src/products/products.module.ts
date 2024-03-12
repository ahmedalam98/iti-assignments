import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: "products",
      schema: ProductSchema
    }])
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
