import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { RegAuthDto } from './dto/reg-auth.dto';
import { LogAuthDto } from './dto/log-auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  // @UsePipes(ValidationPipe)
  @Post('reg')
  Reg(@Body() regData: RegAuthDto) {
    return this.authService.Reg(regData);
  }

  // @UsePipes(ValidationPipe)
  @Post('log')
  Log(@Body() logData: LogAuthDto, @Res({passthrough:true}) response:Response) {
    return this.authService.Log(logData, response);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
