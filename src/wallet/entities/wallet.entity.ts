import { Currency } from 'src/currency/entities/currency.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

@Entity({ name: 'wallets' })
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.wallets)
  user: User;

  @ManyToOne(() => Currency, (currency) => currency.wallets)
  currency: Currency;

  @Column({ name: 'amount', type: 'bigint', unsigned: true })
  amount: number;
}
