import { Request, Response } from 'express';
import { postRepository } from '../repositories/postRepository';
import { userRepository } from '../repositories/userRepository';

export class PostController {
  create = async (req: Request, res: Response) => {
    const { body } = req.body;
    const { userId } = req.params;

    console.log(body, userId);

    if (!body) {
      return res.status(400).json({ message: 'O post não pode ser vazio' });
    }

    console.log(body);

    try {
      const user = await userRepository.findOneBy({ id: Number(userId) });
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      console.log(user);

      const newPost = postRepository.create({
        body,
        user,
      });

      console.log(newPost);

      await postRepository.save(newPost);
      return res.status(201).json({ message: 'Post criado com sucesso!' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
}
