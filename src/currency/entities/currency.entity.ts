import { Wallet } from 'src/wallet/entities/wallet.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'currencies' })
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Wallet, (wallet) => wallet.currency)
  wallets: Array<Wallet>;
}
