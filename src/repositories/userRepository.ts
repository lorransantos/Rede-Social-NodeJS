import { AppDataSource } from '../data_source';
import { User } from '../entities/User';

export const userRepository = AppDataSource.getRepository(User);
