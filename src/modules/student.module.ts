import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { StudentService } from 'src/services/student.service';
import { studentProviders } from 'src/providers/student.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...studentProviders, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
