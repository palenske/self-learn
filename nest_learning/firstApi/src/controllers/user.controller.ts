import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { AppService } from '../services/app.service';

@Controller('users')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloUser(): string {
    return this.appService.getHelloUser();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.appService.create(createUserDto);
  }
}
