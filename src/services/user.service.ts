import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';
import UserDTO from 'src/DTO/User.dto';
import LoginDTO from 'src/DTO/Login.dto';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  private saltRounds = 10;
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  private async find(login: LoginDTO): Promise<User> {
    return this.userRepository.findOneBy({ email: login.email });
  }

  private async register(user: UserDTO) {
    this.userRepository.save(user);
  }

  private async isRegistered(user: UserDTO) {
    const userOnDb = await this.userRepository.findOneBy([
      { email: user.email },
      { nickname: user.nickname },
    ]);

    return !!userOnDb;
  }

  async findUser(name: string) {
    return await this.userRepository.findOne({ where: { nickname: name } });
  }

  async AuthenticateLogin(login: LoginDTO) {
    const user = await this.find(login);
    const encryptedPassword = await bcrypt.compare(
      login.password,
      user.password,
    );

    if (!user)
      throw new HttpException('Usuário não encontrado.', HttpStatus.NOT_FOUND);

    if (encryptedPassword) {
      const token = new JwtService().sign(
        {
          email: user.email,
          name: user.name,
          nickname: user.nickname,
          id: user.id,
        },
        {
          secret: process.env.JWT_SECRET,
          expiresIn: '86400s',
        },
      );

      return token;
    } else {
      throw new HttpException('Senha Incorreta.', HttpStatus.UNAUTHORIZED);
    }
  }

  async AuthenticationRegister(user: UserDTO) {
    if (await this.isRegistered(user)) {
      throw new HttpException('Usuário cadastrado.', HttpStatus.BAD_REQUEST);
    }

    user.password = await bcrypt.hash(user.password, this.saltRounds);

    return await this.register(user);
  }
}
