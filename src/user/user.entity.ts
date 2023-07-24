import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import { IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { ProfileEntity } from './profile/profile.entity';
// import { ArticleEntity } from '../article/article.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ default: '' })
  avatar: string;

  @Column()
  password: string;

  @Column({ default: false })
  verified: boolean;

  @Column({ nullable: true })
  subscribe: number;

  @OneToMany((type) => ProfileEntity, (profile) => profile.id)
  profiles: ProfileEntity[];
}
