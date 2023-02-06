import { AppDataSource } from '../data_source';
import { Post } from '../entities/Post';

export const postRepository = AppDataSource.getRepository(Post);
