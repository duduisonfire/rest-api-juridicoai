import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('string', { length: 500, unique: true })
  nickname: string;

  @Column('string')
  name: string;

  @Column('text')
  password: string;

  @Column('text', { unique: true })
  email: string;
}
