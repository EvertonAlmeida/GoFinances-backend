import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactionRepository = await this.find();

    const income = transactionRepository.reduce((total, transaction) => {
      return transaction.type === 'income' ? total + transaction.value : total;
    }, 0);

    const outcome = transactionRepository.reduce((total, transaction) => {
      return transaction.type === 'outcome' ? total + transaction.value : total;
    }, 0);

    const total = income - outcome;

    const balance = {
      income,
      outcome,
      total,
    };

    return balance;
  }
}

export default TransactionsRepository;
