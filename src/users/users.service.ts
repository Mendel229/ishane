import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepositiry: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepositiry.save(createUserDto);
  }

  findAll() {
    return this.userRepositiry.find();
  }

  findOne(mail: string) {
    return this.userRepositiry.findOne({ where: { mail } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepositiry.update(id, updateUserDto);
    return this.userRepositiry.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.userRepositiry.delete(id);
  }
}
