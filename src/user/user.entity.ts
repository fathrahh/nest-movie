import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt';
// import { ArticleEntity } from '../article/article.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ default: '' })
  image: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 'yaya');
  }

  //   @ManyToMany((type) => ArticleEntity)
  //   @JoinTable()
  //   favorites: ArticleEntity[];

  //   @OneToMany((type) => ArticleEntity, (article) => article.author)
  //   articles: ArticleEntity[];
}
