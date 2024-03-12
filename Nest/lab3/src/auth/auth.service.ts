import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { RegAuthDto } from './dto/reg-auth.dto';
import { LogAuthDto } from './dto/log-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(@InjectModel('users') private usersModel,private jwt:JwtService ){}

  async Reg(RegData: RegAuthDto) {
    let foundUser = await this.usersModel.findOne({email:RegData.email})
    if(foundUser) return {message:"Email Already Exist !!"}
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(RegData.password, salt);
    RegData.password = hashedPassword;
    let newUser = new this.usersModel(RegData);
    await newUser.save();
    newUser = await this.usersModel.findOne({email:RegData.email},{_id:false, __v:false});
    return newUser;
  }

  async Log(LogData: LogAuthDto, res:Response) {
    let foundUser = await this.usersModel.findOne({email:LogData.email});
    if(!foundUser) return {message:"Invalid Email/Password"};
    let ifPassTrue = await bcrypt.compare(LogData.password, foundUser.password);
    if(ifPassTrue == false) return {message:"Invalid Email/Password"};
    let jwtDecodedData = await this.jwt.sign({id:foundUser._id,role:foundUser.role});
    // console.log(jwtDecodedData);
    res.header('x-auth-token',jwtDecodedData)
    //res.cookie()
    //res.header()
    return {message:"Logged-In Successfully"};
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
