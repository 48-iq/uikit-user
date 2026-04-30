import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/postgres/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(args: { id: string; email: string, username: string }) {
    const { id, email, username } = args;
    const exists = await this.userRepository.existsBy({ id });
    if (exists) {
      throw new Error('User already exists');
    }
    const newUser =  this.userRepository.save({ id, email, username });

    return newUser;
  // TODO:
  }

  async get(id: string) {
    return this.userRepository.findOneOrFail({ where: { id } });
  }

  async update(id: string, args: { email: string }) {
    
    const user = await this.userRepository.findOneOrFail({ where: { id } });
    user.email = args.email;
    return this.userRepository.save(user);
  }

}
