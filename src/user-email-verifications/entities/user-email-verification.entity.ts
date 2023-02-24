import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'user_email_verifications' })
export class UserEmailVerification {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.wallets)
  user: User;

  @CreateDateColumn()
  createdDate: Date;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'pin', type: 'varchar' })
  pin: string;

  @Column({ name: 'status', type: 'varchar' })
  status: string;
}
