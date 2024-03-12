import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    MongooseModule.forRoot(
      'mongodb+srv://abdallahfarag72:nest-lab@cluster0.5ncle3m.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
    JwtModule.register({secret: "serect", signOptions: {expiresIn: "1d"}})
    
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: RolesGuard
  }],
})
export class AppModule {}
