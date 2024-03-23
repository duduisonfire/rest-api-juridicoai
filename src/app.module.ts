import { Module } from '@nestjs/common';
import { StudentModule } from './modules/student.module';
import { StudentController } from './controller/student.controller';

@Module({
  imports: [StudentModule],
  controllers: [StudentController],
  providers: [],
})
export class AppModule {}
