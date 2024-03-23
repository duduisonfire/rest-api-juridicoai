import { Module } from '@nestjs/common';
import { StudentModule } from './modules/student.module';
import { StudentController } from './controller/student.controller';
import { UserModule } from './modules/user.module';
import { UserController } from './controller/user.controller';

@Module({
  imports: [StudentModule, UserModule],
  controllers: [StudentController, UserController],
  providers: [],
})
export class AppModule {}
