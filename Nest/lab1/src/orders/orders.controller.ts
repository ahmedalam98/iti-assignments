import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Post()
  create(@Body() newOrder: any) {
    return this.ordersService.create(newOrder);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedOrder: any) {
    return this.ordersService.update(+id, updatedOrder);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }

  @Get(":id/products")
  findProducts(@Param('id') id: string) {
    return this.ordersService.findProducts(+id);
  }
  
}
