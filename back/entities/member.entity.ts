import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

// MyEntity class가 Entity임을 알려주는 decorator
@Entity()
@Unique(['nickname'])
export class MemberEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  password: string;
  @Column()
  nickname: string;
  @Column()
  tpye: string;
  @Column()
  platform: string;
  @Column()
  birthdate: string | null;
}
