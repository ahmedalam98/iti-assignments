import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './auth.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'users', schema:AuthSchema}]),
    JwtModule.register({secret:'secret',signOptions:{expiresIn:'1d'}})
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
