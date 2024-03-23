import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column('int')
  age: number;

  @Column('text')
  school: string;

  @Column('text')
  class: string;

  @Column('text', { unique: true })
  email: string;
}
