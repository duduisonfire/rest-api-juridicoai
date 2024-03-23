import { Body, Controller, Get, Post } from '@nestjs/common';
import StudentDTO from 'src/DTO/StudentDTO';
import { StudentService } from 'src/services/student.service';

@Controller()
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('api/student')
  async getAllStudents() {
    return await this.studentService.findAll();
  }

  @Post('api/students')
  async saveAllStudents(@Body() students: StudentDTO[]) {
    return await this.studentService.addAll(students);
  }
}
