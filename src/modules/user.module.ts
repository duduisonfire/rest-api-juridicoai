import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { UserService } from 'src/services/user.service';
import { userProviders } from 'src/providers/user.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService],
  exports: [UserService],
})
export class StudentModule {}
