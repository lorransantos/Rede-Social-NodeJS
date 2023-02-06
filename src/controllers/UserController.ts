import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository';

export class UserController {
  create = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Preencha todos os campos' });
    }
    try {
      const newUser = userRepository.create({
        name,
        email,
        password,
      });

      await userRepository.save(newUser);

      return res.status(201).json({
        message: `Usuário ${newUser.name} foi cadastrado com sucesso!`,
      });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  userPosts = async (req: Request, res: Response) => {
    const { userId } = req.params;
    if (!userId) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    try {
      const user = await userRepository.find({
        relations: {
          posts: true,
        },
        where: {
          id: Number(userId),
        },
      });

      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
}
