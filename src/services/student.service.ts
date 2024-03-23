import { Inject, Injectable } from '@nestjs/common';
import { Student } from 'src/model/student.entity';
import { Repository } from 'typeorm';
import StudentDTO from 'src/DTO/Student.dto';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async addAll(students: StudentDTO[]) {
    this.studentRepository.save(students);
  }
}
