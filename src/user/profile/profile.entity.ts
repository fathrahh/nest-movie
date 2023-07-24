import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  ManyToOne,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../user.entity';
// import { ArticleEntity } from '../article/article.entity';

@Entity('profile')
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ default: '' })
  avatar: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 'yaya');
  }

  @ManyToOne((type) => UserEntity, (user) => user.id)
  user: string;
}
