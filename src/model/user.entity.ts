import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500, unique: true })
  nickname: string;

  @Column('text')
  name: string;

  @Column('text')
  password: string;

  @Column('text', { unique: true })
  email: string;
}
