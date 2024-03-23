import { Body, Controller, Get, Post } from '@nestjs/common';
import LoginDTO from 'src/DTO/LoginDTO';
import UserDTO from 'src/DTO/UserDTO';
import { UserService } from 'src/services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('api/student')
  async login(@Body() login: LoginDTO) {
    return await this.userService.find(login);
  }

  @Post('api/students')
  async register(@Body() user: UserDTO) {
    return await this.userService.register(user);
  }
}
