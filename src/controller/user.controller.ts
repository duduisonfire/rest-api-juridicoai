import { Body, Controller, Get, Post } from '@nestjs/common';
import UserDTO from 'src/DTO/UserDTO';
import { UserService } from 'src/services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('api/user')
  async getAllUsers() {
    return await this.userService.findAll();
  }

  @Post('api/user')
  async saveAllUsers(@Body() users: UserDTO[]) {
    return await this.userService.addAll(users);
  }
}
