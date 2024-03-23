import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import LoginDTO from 'src/DTO/Login.dto';
import UserDTO from 'src/DTO/User.dto';
import { UserService } from 'src/services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('api/user/:nickname')
  async getUser(@Param() params: any) {
    const authentication = await this.userService.findUser(params.nickname);

    return authentication;
  }

  @Post('api/user/login')
  async login(@Body() login: LoginDTO) {
    const authentication = await this.userService.AuthenticateLogin(login);

    return authentication;
  }

  @Post('api/user/register')
  async register(@Body() user: UserDTO) {
    return await this.userService.AuthenticationRegister(user);
  }
}
