import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/postgres/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(args: { id: string; email: string }) {
    const { id, email } = args;
    const user = await this.userRepository.findOne({ where: { id } });
    return this.userRepository.save({ id, email });
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
