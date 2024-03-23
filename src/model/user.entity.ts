import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
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

  @Column('text')
  email: string;
}
