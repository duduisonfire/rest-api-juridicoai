import { Inject, Injectable } from '@nestjs/common';
import UserDTO from 'src/DTO/UserDTO';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async addAll(users: UserDTO[]) {
    users.forEach((user) => {
      this.userRepository.save(user);
    });
  }
}
