import { getRepository, getCustomRepository } from 'typeorm';
import TransactionRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import Category from '../models/Category';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  categoryName: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    categoryName,
  }: Request): Promise<Transaction> {
    const categoryRepository = getRepository(Category);
    const transactionRepository = getCustomRepository(TransactionRepository);

    const { total } = await transactionRepository.getBalance();

    if (type === 'outcome' && value > total) {
      throw new AppError('Insufficient Fund');
    }

    const category = new Category();
    const categoryExists = await categoryRepository.findOne({
      where: { title: categoryName },
    });

    if (categoryExists) {
      category.id = categoryExists.id;
    }

    if (!categoryExists) {
      const categorySaved = categoryRepository.create({
        title: categoryName,
      });

      await categoryRepository.save(categorySaved);
      category.id = categorySaved.id;
    }

    const transaction = transactionRepository.create({
      title,
      value,
      type,
      category_id: category.id,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
