import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';
import UserDTO from 'src/DTO/UserDTO';
import LoginDTO from 'src/DTO/LoginDTO';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async find(login: LoginDTO): Promise<User> {
    return this.userRepository.findOneBy({ email: login.email });
  }

  async register(user: UserDTO) {
    this.userRepository.save(user);
  }
}
