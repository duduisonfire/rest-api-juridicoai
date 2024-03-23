import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { UserController } from './controller/user.controller';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
